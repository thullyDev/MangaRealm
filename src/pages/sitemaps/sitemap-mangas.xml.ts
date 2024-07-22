import { getMangas } from "../../services/Manganato/manganato";
import { DOMAIN_ORIGIN } from "../../utilities/config";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || '1'; 

  const response = await getMangas(`/filter/?page=${page}`)
  const { mangas} = response
  const pages = [];

  for (let i = 1; i < mangas.length; i++) {
    const { slug } = mangas[i]
    pages.push(`${DOMAIN_ORIGIN}/read${slug}`)
  }

  const xml = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
          ${
            pages.map(page => `
              <url>
                <loc>${page}</loc>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
              </url>`).join('\n')
           }
        </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
