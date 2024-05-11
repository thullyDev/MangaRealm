export interface Manga {
  slug: string;
  image_url: string;
  title: string;
}

export interface FeaturesResponse {
  mangas: Manga[];
}