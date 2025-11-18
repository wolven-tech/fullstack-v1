import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
  .use(cors())
  .use(
    swagger({
      documentation: {
        info: {
          title: "V1 API",
          version: "1.0.0",
          description: "API for V1 application",
        },
      },
    })
  )
  .get("/", () => ({ message: "V1 API is running" }))
  .get("/health", () => ({ status: "ok", timestamp: new Date().toISOString() }))
  .post(
    "/api/subscribe",
    async ({ body }) => {
      const { email, userGroup } = body;

      // Call Loops API
      const res = await fetch(
        `https://app.loops.so/api/newsletter-form/${process.env.NEXT_PUBLIC_LOOPS_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            userGroup,
          }),
        }
      );

      const json = (await res.json()) as Record<string, unknown>;

      return {
        success: res.ok,
        ...(json as object),
      };
    },
    {
      body: t.Object({
        email: t.String({ format: "email" }),
        userGroup: t.String(),
      }),
    }
  );

export default app;

if (import.meta.main) {
  const port = process.env.PORT || 3002;
  app.listen(port);
  console.log(`🚀 API running at http://localhost:${port}`);
}
