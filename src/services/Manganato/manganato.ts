import { ApiHandler } from "../../utilities/handlers/apiHandler"
import { mangaApiUrl } from "../../utilities/config"
import type { MangaChapterRead, MangaRead, MangasResponse } from "./manganatoTypes";
import { Cache } from '../../database/Cache/cache'
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

export async function getMangaChapter(slug: string, chapter: string): Promise<MangaChapterRead> {
  const response = await api.get(`/${slug}/${chapter}`);

  if (response.status !== SUCCESSFUL) 
    return {
      panels: []
    }

  const { panels } = response.data.data as MangaChapterRead;

  return {
    panels: panels,
  }
}

export async function getCachedManga(slug: string | undefined): Promise<MangaRead | null> {
  if (!slug) return null

  const cache = new Cache()
  const cacheID = `manga:slug-${slug}` 
  const cacheData = await cache.hget(cacheID) 

  if (cacheData != null) {
    return cacheData
  }

  const manga = await getManga(slug)

  if (!manga) return null 

  cache.hset(cacheID, manga)

  return manga
}
