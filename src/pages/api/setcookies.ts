import type { APIRoute } from 'astro';
import type { _Setcookie } from '../../services/MangaRealm.api/types';

export const post: APIRoute = async function post({ cookies, request }) {
    // try {
    //     const { url: requestUrl } = request;
    //     const { searchParams } = new URL(requestUrl);
    //     const startTime = searchParams.get('startTime');
    //     console.log({ startTime });

    //     cookies.set('start-time', '31', { path: '/' });

    //     return new Response('', { status: 200 });
    // } catch (error: unknown) {
    //     console.error(`Error in player api route: ${error as string}`);
    //     return redirect(`${siteUrl}/`);
    // }
    const url = new URL(request.url);
  const rawData = url.searchParams.get("data")
  const session_token = cookies.get("session_token")

  console.log({ session_token })

  if (!rawData) {
    const response = new Response(
      JSON.stringify({
        message: 'no data',
      }),
      { status: 400 },
    );
    return response;
  }

  const data: _Setcookie[] = JSON.parse(rawData) 

  const response = new Response(
    JSON.stringify({
      message: 'cookie set successfully',
    }),
    { status: 200 },
  );

  const THIRTY_DAYS_SECONDS = 5184000 // this is not a 1 day
  for (let i=0; i < data.length; i++) {
    const { key, value, maxAge, secure, httpOnly } = data[i];
    const cookieOptions = {
      maxAge: maxAge || THIRTY_DAYS_SECONDS, 
      secure: secure || true, 
      httpOnly: httpOnly || true, 
    };
    cookies.set(key, value, cookieOptions)
}

return response
};