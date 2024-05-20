import type { AnimeDataModel } from "mal-scraper";

export interface Chapter {
  name: string;
  slug: string;
  views: string;
  date: string;
}

export interface genre {
  name: string;
  slug: string;
}


export interface Manga {
  slug: string;
  image_url: string;
  title: string;
  status: string;
  synopsis: string;
  genres: string[];
  type: string;
  popularity: string;
  score: string;
  update: string;
  views: string;
  author: string;
  description: string;
  chapter: Chapter;
}

export interface MangasResponse {
  mangas: Manga[];
  pagination: Pagination;
}

export interface Pagination {
  page: string;
  pages: string;
}


export interface MalData {
  title: string,
  synopsis: string,
  picture: string,
  japaneseTitle: string,
  englishTitle: string,
  synonyms: string[],
  type: string,
  chapters: string,
  published: string,
  serialization: string,
  authors: string[],
  genres: string[],
  status: string,
  score: string,
  scoreStats: string,
  ranked: string,
  popularity: string,
  members: string,
  url: string,
  characters: character[],
}

export interface character {
  picture: string;
  name: string;
  role: string;
}

export interface MangaRead {
  manga_id: string;
  image_url: string;
  image: string;
  title: string;
  status: string;
  genres: genre[];
  type: string;
  popularity: string;
  score: string;
  update: string;
  views: string;
  author: string;
  description: string;
  chapter: Chapter;
  altNames: string;
  malId: null | number;
  aniId: null | number;
  chapters: Chapter[];
  malData: MalData | AnimeDataModel | null;
}

export interface Panel {
  image_url: string;
  title: string;
}

export interface MangaChapterRead {
  panels: Panel[]
}