import { ApiHandler, type RequestOptions } from "../../utilities/handlers/apiHandler";
import type {
  _AuthResponse,
  _AuthUser,
  _ForgotPassword,
  _Login,
  _RemoveItemFromListArgs,
  _RenewPassword,
  _Request,
  _Response,
  _Setcookie,
  _Signup,
  _UploadUserAvatarImageArgs,
} from "./types";
import { ShowAlert, isEmailValid } from "../../utilities/misc";
import { FORBIDDEN, SUCCESSFUL } from "../../utilities/errors";
import { setAuthCookies, setTokenToCookies } from "./cookies";

const Api = new ApiHandler("");

export const isUserAuth = () => {
  //@ts-ignore
  const user = window.user || {};
  return Object.keys(user).length > 0;
};

export async function setBookmark(slug: string, email: string, auth_token: string) {
  const { status, data } = await backendRequest(`/add_to_list/`, auth_token, { email, slug });

  if (status == FORBIDDEN || status != SUCCESSFUL) {
    ShowAlert("user needs to login");
    return null;
  }

  const { auth_token: token, message, data: listData } = data;
  const { isAdded } = listData;

  ShowAlert(message);

  const sixtyDaysInSeconds = 5184000;
  const cookies = JSON.stringify([
    {
      key: "auth_token",
      value: token,
      maxAge: sixtyDaysInSeconds,
    },
  ]);

  Api.post("/api/setcookies", { data: cookies });

  return isAdded;
};

export async function changeUserInfo({
  email,
  username,
  auth_token,
}: {
  email: string;
  username: string;
  auth_token: string;
}) {
  const changeData = JSON.stringify([{ email }, { username }]);
  const data = await backendRequest(`/change_user_info/`, auth_token, { email, data: changeData });
  const { status } = data;
  console.log({ status, data });

  if (status == FORBIDDEN) {
    ShowAlert("user needs to login");
    return null;
  }

  if (status != SUCCESSFUL) {
    return null;
  }

  const { auth_token: token, message } = data;

  ShowAlert(message);

  setTokenToCookies(token)

  return true;
};

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
  const data = await authRequest("/signup", params, captchaResponse);
  const { status_code, message, data: userData } = data.data as _AuthResponse;

  ShowAlert(message);
  if (status_code != 200) {
    return;
  }

  setAuthCookies(userData);
  setupUser(userData);
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
  const data = await authRequest("/login", params, captchaResponse);
  const { status_code, message, data: userData } = data.data as _AuthResponse;

  ShowAlert(message);
  if (status_code != 200) {
    return;
  }

  setAuthCookies(userData);
  setupUser(userData);
}

export async function verify(url: string, code: string): Promise<_AuthResponse> {
  const data = await Api.post(url, { code });
  return data.data as _AuthResponse;
}

export async function forgotPassword({ captchaResponse, email }: _ForgotPassword) {
  if (!isEmailValid(email)) {
    ShowAlert("email is invalid");
    return;
  }
  const params = { email };
  const data = await authRequest("/forgot_password", params, captchaResponse);
  const { message } = data.data as _Response;
  ShowAlert(message);
}

export async function renewPassword({ captchaResponse, confirm, password }: _RenewPassword) {
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
  const data = await authRequest("/renew_password", params, captchaResponse);
  const { status_code, message } = data.data as _Response;
  ShowAlert(message);

  if (status_code == 200) {
    window.location.assign("/");
    return;
  }
}

async function request({ endpoint, params, base, headers }: _Request) {
  return await Api.post(base + endpoint, params, { headers });
}

async function authRequest(endpoint: string, params: RequestOptions, captchaResponse: string) {
  const headers = {
    "Content-Type": "application/json",
    captchaToken: captchaResponse,
  };
  const base = getApiUrl();
  return await request({ endpoint, params, base, headers });
}

async function backendRequest(endpoint: string, auth_token: string, params: RequestOptions = {}) {
  const headers = {
    "Content-Type": "application/json",
    auth_token: auth_token,
  };

  const base = getBackendApiUrl();
  return await request({ endpoint, params, base, headers });
}

function getApiUrl(): string {
  const inp = document.querySelector(".auth-api-inpt") as HTMLInputElement;
  if (!inp) return "";

  return inp.value;
}

function getBackendApiUrl(): string {
  const inp = document.querySelector(".backend-api-inpt") as HTMLInputElement;
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

export async function uploadUserAvatarImage({ base64Url, email, username, auth_token }: _UploadUserAvatarImageArgs) {
  const params = { email, username, image: base64Url  };
  const data = await backendRequest("/upload_user_profile_image", auth_token, params);
  const { status } = data;

  if (status != SUCCESSFUL) {
    return false;
  }

  const { auth_token: token, data: userData } = data.data as {
    auth_token: string;
    message: string;
    status_code: number;
    data: _AuthUser,
  };
  setAuthCookies(userData);
  setTokenToCookies(token)

  return true;

}

export const removeItemFromList = async ({ slug, email, auth_token }: _RemoveItemFromListArgs): Promise<boolean> => {
  const params = { email, slug };
  const data = await backendRequest("/remove_from_list", auth_token, params);
  const { status } = data;

  if (status != SUCCESSFUL) {
    return false;
  }

  const { auth_token: token } = data.data as {
    auth_token: string;
    message: string;
    status_code: number;
  };

  setTokenToCookies(token)

  return true;
};
