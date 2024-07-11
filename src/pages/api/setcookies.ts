import type { APIRoute } from "astro";
import type { _Setcookie } from "../../services/MangaRealm.api/types";
import { BAD_REQUEST, SUCCESSFUL } from "../../utilities/errors";
import { setCookies } from "../../services/MangaRealm.api/cookies";

// to deletcookies, just set the max-age to 0
export const POST: APIRoute = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const rawData = url.searchParams.get("data");

  if (!rawData) {
    const response = new Response(
      JSON.stringify({
        message: "no data",
        status: BAD_REQUEST, 
      }),
    );
    return response;
  }

  const data: _Setcookie[] = JSON.parse(rawData);

  const response = new Response(
    JSON.stringify({
      message: "cookie set successfully",
      status: SUCCESSFUL, 
    }),
  );
  setCookies(data, cookies);
  return response;
};
