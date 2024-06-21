import { ApiHandler, type RequestOptions } from "../../utilities/handlers/apiHandler";
import type {
  _AuthResponse,
  _AuthUser,
  _ForgotPassword,
  _Login,
  _RenewPassword,
  _Response,
  _Setcookie,
  _Signup,
} from "./types";
import { ShowAlert, isEmailValid } from "../../utilities/misc";
import type { AstroCookies } from "astro";

const authApi = new ApiHandler("");

export const setBookmark = () => {
  return true;
};

export const isUserAuth = () => {
  //@ts-ignore
  const user = window.user || {};
  return Object.keys(user).length > 0;
};

export async function cancelRenewPassword() {}

export async function signup({ captchaResponse, email, username, password, confirm }: _Signup) {
  if (!isEmailValid(email)) {
    ShowAlert("email is invalid");
    return;
  }

  if (password.length < 10) {
    ShowAlert("password should be atleast 10 characters");
    return;
  }

  if (confirm != password) {
    ShowAlert("confirm and password dont match");
    return;
  }

  const params = { email, username, password, confirm };
  const data = await request("/signup", params, captchaResponse);
  const { message } = data.data as _Response;
  ShowAlert(message);
  return;
}

export async function setAuthCookies({ token, email, profile_image_url, username }: _AuthUser) {
  const user = {
    email,
    profile_image_url,
    username,
  };
  const sixtyDaysInSeconds = 5184000;
  const cookies = JSON.stringify([
    {
      key: "auth_token",
      value: token,
      maxAge: sixtyDaysInSeconds,
    },
    {
      key: "user_data",
      value: JSON.stringify(user),
      maxAge: sixtyDaysInSeconds,
    },
  ]);

  authApi.post("/api/setcookies", { data: cookies });
}

export async function login({ captchaResponse, email, password }: _Login) {
  if (!isEmailValid(email)) {
    ShowAlert("email is invalid");
    return;
  }

  if (password.length < 10) {
    ShowAlert("password should be atleast 10 characters");
    return;
  }
  const params = { email, password };
  const data = await request("/login", params, captchaResponse);
  const { status_code, message, data: userData } = data.data as _AuthResponse;

  ShowAlert(message);
  if (status_code != 200) {
    return;
  }

  setAuthCookies(userData);
  setupUser(userData);
}

export async function verify(url: string, code: string): Promise<_AuthResponse> {
  const data = await authApi.post(url, { code });
  return data.data as _AuthResponse;
}

export async function forgotPassword({ captchaResponse, email }: _ForgotPassword) {
  if (!isEmailValid(email)) {
    ShowAlert("email is invalid");
    return;
  }
  const params = { email };
  const data = await request("/forgot_password", params, captchaResponse);
  const { message } = data.data as _Response;
  ShowAlert(message);
}

export async function renewPassword({ captchaResponse, confirm, password }: _RenewPassword) {
  console.log("i am here");
  if (password.length < 10) {
    ShowAlert("password should be atleast 10 characters");
    return;
  }

  if (confirm != password) {
    ShowAlert("confirm and password dont match");
    return;
  }

  const code = $(".code-inp").val();
  const params = { password, confirm, code };
  const data = await request("/renew_password", params, captchaResponse);
  const { status_code, message } = data.data as _Response;
  ShowAlert(message);

  if (status_code == 200) {
    window.location.assign("/");
    return;
  }
}

async function request(endpoint: string, params: RequestOptions, captchaResponse: string) {
  const headers = {
    "Content-Type": "application/json",
    captchaToken: captchaResponse,
  };
  const base = getAuthApiUrl();
  return await authApi.post(base + endpoint, params, { headers });
}

function getAuthApiUrl(): string {
  const inp = document.querySelector(".auth-api-inpt") as HTMLInputElement;
  if (!inp) return "";

  return inp.value;
}

function setupUser({ email, username, profile_image_url }: _AuthUser) {
  //@ts-ignore
  window.user = {
    email,
    username,
    profile_image_url,
  };
  setupProfile(profile_image_url, username);
}

function setupProfile(profile_image_url: string | null, username: string) {
  if (!profile_image_url) return;
  const profileImageEle = `<img src=${profile_image_url} alt="${username}" class="profile rounded-full w-full h-full">`;
  const accountBtn = document.querySelector(".account-button");
  if (accountBtn) accountBtn.innerHTML = profileImageEle;
}

export function setCookies(data: _Setcookie[], cookies: AstroCookies) {
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
}
