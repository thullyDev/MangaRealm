import type { AstroCookies } from "astro";
import type { _AuthUser, _Setcookie } from "./types";
import { ApiHandler } from "../../utilities/handlers/apiHandler";
import { SUCCESSFUL } from "../../utilities/errors";

const api = new ApiHandler("")

export function setCookies(data: _Setcookie[], cookies: AstroCookies) {
  const THIRTY_DAYS_SECONDS = 30 * 24 * 60 * 60;
  const rootPath = "/";
  for (let i = 0; i < data.length; i++) {
    const { key, value, path, maxAge, secure, httpOnly } = data[i];
    const expirationDate = new Date();
    expirationDate.setSeconds(expirationDate.getSeconds() + (maxAge || THIRTY_DAYS_SECONDS));
    const cookieOptions = {
      "max-age": maxAge || THIRTY_DAYS_SECONDS,
      expires: expirationDate,
      path: path || rootPath,
      secure: secure || true,
      httpOnly: httpOnly || true,
    };
    cookies.set(key, value, cookieOptions);
  }
}

export async function setAuthCookies({ token, email, profile_image_url, username }: _AuthUser) {
  const user = {
    email,
    profile_image_url,
    username,
  };
  const authTokenCookie = getCookiesOptions("auth_token", token)
  const userCookie = getCookiesOptions("user_data", JSON.stringify(user))
  const cookies = JSON.stringify([
    authTokenCookie,
    userCookie
  ]);

  api.post("/api/setcookies", { data: cookies });
}

export async function setTokenToCookies(token: string) {
  const authTokenCookie = getCookiesOptions("auth_token", token)
  const data = [ authTokenCookie ]

  const { status } = await api.post("/api/setcookies", { data: JSON.stringify(data) }) as { message: string, status: number };

  if (status == SUCCESSFUL) {
    return true
  }

  return false
}

const getCookiesOptions = (key: string, value: string) => {
  const sixtyDaysInSeconds = 5184000;
  return { key, value, maxAge: sixtyDaysInSeconds }
}