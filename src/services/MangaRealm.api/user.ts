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
import { _Alert, isEmailValid } from "../../utilities/misc";

const authApi = new ApiHandler("");

export const setBookmark = () => {
  return true;
};

export const isUserAuth = () => {
  return false;
};

export async function cancelRenewPassword() {}

export async function signup({ captchaResponse, email, username, password, confirm }: _Signup) {
  if (!isEmailValid(email)) {
    _Alert("email is invalid");
    return;
  }

  if (password.length < 10) {
    _Alert("password should be atleast 10 characters");
    return;
  }

  if (confirm != password) {
    _Alert("confirm and password dont match");
    return;
  }

  const params = { email, username, password, confirm };
  const data = await request("/signup", params, captchaResponse);
  const { message } = data.data as _Response;

  _Alert(message);
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

  const data = await authApi.post("/api/setcookies", { data: cookies });
}

export async function login({ captchaResponse, email, password }: _Login) {
  if (!isEmailValid(email)) {
    _Alert("email is invalid");
    return;
  }

  if (password.length < 10) {
    _Alert("password should be atleast 10 characters");
    return;
  }
  const params = { email, password };
  const data = await request("/login", params, captchaResponse);
  const { status_code, message, data: userData } = data.data as _AuthResponse;

  if (status_code != 200) {
    _Alert(message);
    return;
  }

  setAuthCookies(userData);
  window.location.reload();
}

// export async function verify(data: _AuthUser) {
// 	setAuthCookies(data);
// }

export async function verify(code: string): Promise<_AuthResponse> {
  const base = getAuthApiUrl();
  const data = await authApi.post(base + `/verify/${code}`);
  return data.data as _AuthResponse;
}

export async function forgotPassword({ captchaResponse, email }: _ForgotPassword) {
  if (!isEmailValid(email)) {
    _Alert("email is invalid");
    return;
  }
  const params = { email };
  const data = await request("/forgot_password", params, captchaResponse);

  const { status_code, message } = data.data as _Response;
  _Alert(message);

  if (status_code == 200) {
    window.location.assign("/");
    return;
  }

  return;
}

export async function renewPassword({ captchaResponse, confirm, password }: _RenewPassword) {
  if (password.length < 10) {
    _Alert("password should be atleast 10 characters");
    return;
  }

  if (confirm != password) {
    _Alert("confirm and password dont match");
    return;
  }

  const params = { password, confirm };
  const data = await request("/renew_password", params, captchaResponse);
  const { status_code, message } = data.data as _Response;
  _Alert(message);

  if (status_code == 200) {
    window.location.assign("/");
    return;
  }

  return;
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
