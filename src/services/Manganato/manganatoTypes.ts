interface chapter {
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
  chapter: chapter;
}

export interface FeaturesResponse {
  mangas: Manga[];
}

