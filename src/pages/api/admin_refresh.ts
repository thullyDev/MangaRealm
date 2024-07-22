import { restartAdmin } from "../../services/MangaRealm.api/admin/handlers";
import { SITE_KEY } from "../../utilities/config";
import { FORBIDDEN, FORBIDDEN_MSG, SUCCESSFUL, SUCCESSFUL_MSG } from "../../utilities/errors";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const sitekeyParam = url.searchParams.get('SITE_KEY') || null; 

  if (sitekeyParam == null || SITE_KEY != sitekeyParam) {
    return new Response(
      JSON.stringify({
        message: FORBIDDEN_MSG,
        status: FORBIDDEN, 
      }),
    );
  }

  restartAdmin()

  return new Response(
    JSON.stringify({
      message: SUCCESSFUL_MSG,
      status: SUCCESSFUL, 
    }),
  );
}
