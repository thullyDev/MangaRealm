import { backendApiUrl } from "../../utilities/config"
import { ApiHandler, type RequestOptions } from "../../utilities/handlers/apiHandler"
import type { _Response } from "./types";

const api = new ApiHandler(backendApiUrl)

export const getProfileData = async ({ auth_token, email }: { auth_token: string, email: string }) => {
  const params = { email };
  const data = await request("/profile_details", params, auth_token);
  console.log({ data })
}

async function request(endpoint: string, params: RequestOptions, auth_token: string) {
  const headers = {
    "Content-Type": "application/json",
    auth_token: auth_token,
  };
  return await api.post(endpoint, params, { headers });
}


