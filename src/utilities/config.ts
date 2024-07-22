// import dotenv from 'dotenv';

// dotenv.config();

// export const authApiUrl: string = process.env.AUTH_API_URL ?? "";
// export const mangaApiUrl: string = process.env.MANGA_API_URL ?? "";
// export const REDIS_URL: string = process.env.REDIS_URL ?? "";
// export const DISQUS_URL: string = process.env.DISQUS_URL ?? "";
// export const HCAPTCHA_SITE_KEY: string = process.env.HCAPTCHA_SITE_KEY ?? "";
export const backendApiUrl: string = import.meta.env.BACKEND_API_URL;
export const authApiUrl: string = import.meta.env.AUTH_API_URL;
export const mangaApiUrl: string = import.meta.env.MANGA_API_URL;
export const REDIS_URL: string = import.meta.env.REDIS_URL;
export const SQL_URL: string = import.meta.env.SQL_URL;
export const DISQUS_URL: string = import.meta.env.DISQUS_URL;
export const HCAPTCHA_SITE_KEY: string = import.meta.env.HCAPTCHA_SITE_KEY;
export const DOMAIN_ORIGIN: string = import.meta.env.DOMAIN_ORIGIN;
