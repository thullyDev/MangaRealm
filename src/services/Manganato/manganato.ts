import { ApiHandler } from "../../utilities/handlers/apiHandler"
import { mangaApiUrl } from "../../utilities/config"
import type { Manga, FeaturesResponse } from "./manganatoTypes";
import malScraper from 'mal-scraper'
import { SUCCESSFUL } from "../../utilities/errors";

 const api = new ApiHandler(mangaApiUrl)

export async function getFeatures(): Promise<Manga[]> {
  const mangas = await getMangas("/popular");
  const features = []
  for (let i = 0; i < mangas.length; i++) {
    const item = mangas[i]
    const malData = await malScraper.getInfoFromName(item.title, true, "manga")
    const { status, synopsis, genres, type, popularity, score } = malData
    features.push({
      ...item,
      status,
      synopsis,
      genres,
      type,
      popularity,
      score,
    })
  }

  return features;
}


export async function getMangas(endpoint: string): Promise<Manga[]>  {
  const response = await api.get(endpoint);

  if (response.status !== SUCCESSFUL) return []

  const data = response.data.data as FeaturesResponse;

  return data.mangas;
}

