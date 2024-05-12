import dotenv from 'dotenv';

dotenv.config();

export const mangaApiUrl = process.env.MANGA_API_URL;
export const REDIS_URL = process.env.REDIS_URL;