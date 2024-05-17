import { ApiHandler } from "../../utilities/handlers/apiHandler"
import { mangaApiUrl } from "../../utilities/config"
import type { MangaRead, MangasResponse } from "./manganatoTypes";
import malScraper from 'mal-scraper'
import { SUCCESSFUL } from "../../utilities/errors";

 const api = new ApiHandler(mangaApiUrl)

export async function getFeatures(): Promise<any> {
  const response = await getMangas("/popular");
  const mangas = response.mangas
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
      malScore: score,
    })
  }

  return features;
}


export async function getMangas(endpoint: string): Promise<MangasResponse>  {
  const response = await api.get(endpoint);

  if (response.status !== SUCCESSFUL) 
    return {
      pagination: {
        page: "1",
        pages: "1"
      },
      mangas: []
    }

  const data = response.data.data as MangasResponse;
  const mangas = data.mangas
  const pagination = data.pagination

  return {
    pagination, 
    mangas
  };
}

export async function getManga(slug: string): Promise<MangaRead | null>  {
  const response = await api.get(`/${slug}`);

  if (response.status !== SUCCESSFUL) 
    return null

  const { manga } = response.data.data as { manga: MangaRead };
  const { malId } = manga

  if (!malId){
    return {
      ...manga,
      malData: null,
    }
  }

  const malData = await malScraper.getInfoFromURL(`https://myanimelist.net/manga/${malId}/`)
  
  return {
    ...manga,
    malData: malData,
  }
}
