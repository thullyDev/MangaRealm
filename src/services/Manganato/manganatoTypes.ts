export interface Manga {
  slug: string;
  image_url: string;
  title: string;
  status: string;
  synopsis: string;
  // genres: string[];
  type: string;
  // popularity: string;
  score: string;
  update: string;
  views: string;
  author: string;
}

export interface FeaturesResponse {
  mangas: Manga[];
}