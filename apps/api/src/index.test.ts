import { describe, expect, test, beforeAll, mock } from "bun:test";
import app from "./index";

// Mock fetch for external API calls
const mockFetch = mock(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ success: true }),
  })
);

beforeAll(() => {
  global.fetch = mockFetch as any;
});

describe("API Health Checks", () => {
  test("GET / returns welcome message", async () => {
    const response = await app.handle(new Request("http://localhost/"));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ message: "V1 API is running" });
  });

  test("GET /health returns status ok", async () => {
    const response = await app.handle(new Request("http://localhost/health"));
    const data = (await response.json()) as { status: string; timestamp: string };

    expect(response.status).toBe(200);
    expect(data.status).toBe("ok");
    expect(data.timestamp).toBeDefined();
  });
});

describe("Newsletter API", () => {
  test("POST /api/subscribe accepts email and userGroup", async () => {
    const response = await app.handle(
      new Request("http://localhost/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "test@example.com",
          userGroup: "general",
        }),
      })
    );

    expect(response.status).toBe(200);
    const data = (await response.json()) as { success: boolean };
    expect(data.success).toBe(true);
  });

  test("POST /api/subscribe validates email format", async () => {
    const response = await app.handle(
      new Request("http://localhost/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "invalid-email",
          userGroup: "general",
        }),
      })
    );

    expect(response.status).toBe(422);
  });

  test("POST /api/subscribe requires email field", async () => {
    const response = await app.handle(
      new Request("http://localhost/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userGroup: "general",
        }),
      })
    );

    expect(response.status).toBe(422);
  });
});
