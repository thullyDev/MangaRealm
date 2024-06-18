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

// 2daccadcb92776c7fd4670330d384a083c9af6c7f05aa84062e5cea6370121f06529d5a2124043249b29c80c31fdc8afca22133e2b7b9c29f7d69dd6765a9b126d358f1d71d785dbbcad374b997c1dcb489bb5a7593a0f97a45aa31d91bbb2f26ed3b18664bac7d554fcd4fc9a1a05c04c7e9c22084140ec04670e6140
// d8566f1fba6c7f1d01ab75e6533fee0664b14b1824a1fc0f4855a86777fd87414ac0d2ee0472d4e9cf9c52b29b87cc79f4ed8a23a447e9b34b707d6b8d83edb5169953a82647c3f207256c188278503d5b7964d616713aed133c2f9946d2f6af996e33b890ad20d6b81dae3d7cd199ed2a296a1d0a311f7da65ec4512e


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

  const cookieResponse = setAuthCookies(userData);
  // window.location.reload();
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