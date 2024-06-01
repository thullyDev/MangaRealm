import dotenv from 'dotenv';

dotenv.config();

export const authApiUrl: string = process.env.AUTH_API_URL ?? "";
export const mangaApiUrl: string = process.env.MANGA_API_URL ?? "";
export const REDIS_URL: string = process.env.REDIS_URL ?? "";
export const DISQUS_URL: string = process.env.DISQUS_URL ?? "";