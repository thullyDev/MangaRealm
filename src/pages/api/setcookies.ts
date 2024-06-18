import type { APIRoute } from "astro";
import type { _Setcookie } from "../../services/MangaRealm.api/types";

// to deletcookies, just set the max-age to 0
export const POST: APIRoute = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const rawData = url.searchParams.get("data");

  if (!rawData) {
    const response = new Response(
      JSON.stringify({
        message: "no data",
      }),
      { status: 400 }, // bad-request status_code
    );
    return response;
  }

  const data: _Setcookie[] = JSON.parse(rawData);

  const response = new Response(
    JSON.stringify({
      message: "cookie set successfully",
    }),
    { status: 200 }, // successfully status_code
  );

  const THIRTY_DAYS_SECONDS = 30 * 24 * 60 * 60;
  const rootPath = "/";
  for (let i = 0; i < data.length; i++) {
    const { key, value, path, maxAge, secure, httpOnly } = data[i];
    const cookieOptions = {
      "max-age": maxAge || THIRTY_DAYS_SECONDS,
      path: path || rootPath,
      secure: secure || true,
      httpOnly: httpOnly || true,
    };
    cookies.set(key, value, cookieOptions);
  }

  return response;
};
