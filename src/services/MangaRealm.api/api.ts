import { backendApiUrl } from "../../utilities/config";
import { SUCCESSFUL } from "../../utilities/errors";
import { ApiHandler, type RequestOptions } from "../../utilities/handlers/apiHandler";
import { setCookies } from "./cookies";
import type { _CheckIfBookMarkedArgs, _GetProfileArgs, _ProfileData, _Response } from "./types";

const api = new ApiHandler(backendApiUrl);

export const getProfileData = async (getData: _GetProfileArgs): Promise<_ProfileData | null> => {
  const { auth_token, email, keywords, page } = getData;
  const params = { email, keywords, list_page: page };
  const data = await request("/profile_details", params, auth_token);
  const { status } = data;

  if (status != SUCCESSFUL) {
    return null;
  }

  const { data: profileData, auth_token: token } = data.data as {
    auth_token: string;
    message: string;
    status_code: number;
    data: _ProfileData;
  };

  //! does not need to set the cookies for the token, cuz thats been done in the profile.astro

  profileData.auth_token = token;

  return profileData;
};


async function request(endpoint: string, params: RequestOptions, auth_token: string) {
  const headers = {
    "Content-Type": "application/json",
    auth_token: auth_token,
  };
  return await api.post(endpoint, params, { headers });
}

export const checkIfBookMarked =  async ({ slug, email, auth_token }: _CheckIfBookMarkedArgs) => {
  if (!email || !auth_token) {
    return false
  } 

  const params = { email, slug };
  const data = await request("/is_in_list", params, auth_token);
  const { status } = data;

  if (status != SUCCESSFUL) {
    return false;
  }

  const { auth_token: token, data: resData } = data.data as {
    auth_token: string;
    message: string;
    data: { isIn: boolean }
    status_code: number;
  };

  return { isIn: resData.isIn, token }
}