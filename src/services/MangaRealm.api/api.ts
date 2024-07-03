import { backendApiUrl } from "../../utilities/config";
import { SUCCESSFUL } from "../../utilities/errors";
import { ApiHandler, type RequestOptions } from "../../utilities/handlers/apiHandler";
import type { Manga } from "../Manganato/manganatoTypes";
import type { _Response } from "./types";

const api = new ApiHandler(backendApiUrl);
interface _ProfileData {
  pagination: {
    page: string;
    pages: string;
  };
  list: Manga[];
  profile: {
    id: number;
    username: string;
    email: string;
    deleted: boolean;
    created_at: string;
    profile_image_url: string | null;
  };
}

export const getProfileData = async ({
  auth_token,
  email,
}: {
  auth_token: string;
  email: string;
}): Promise<_ProfileData | null> => {
  const params = { email };
  const data = await request("/profile_details", params, auth_token);
  const { status } = data;

  if (status != SUCCESSFUL) {
    return null;
  }

  const { data: profileData } = data.data as { message: string; status_code: number; data: _ProfileData };

  return profileData;
};

async function request(endpoint: string, params: RequestOptions, auth_token: string) {
  const headers = {
    "Content-Type": "application/json",
    auth_token: auth_token,
  };
  return await api.post(endpoint, params, { headers });
}
