import { ApiHandler } from "../../utilities/handlers/apiHandler"
import { mangaApiUrl } from "../../utilities/config"
import type { Manga, FeaturesResponse } from "./manganatoTypes";

 const api = new ApiHandler(mangaApiUrl)

export async function getFeatures(): Promise<Manga[]> {
  const data = await api.get("/top");
  const responseData = data.data as FeaturesResponse;

  return responseData.mangas;
}
