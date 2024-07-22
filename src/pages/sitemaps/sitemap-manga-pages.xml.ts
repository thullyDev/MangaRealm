import { DOMAIN_ORIGIN } from "../../utilities/config";

export async function GET() {
  const sitemaps = [];

  for (let i = 1; i < 1781; i++) {
    sitemaps.push(`${DOMAIN_ORIGIN}/sitemaps/sitemap-mangas.xml?page=${i}`)
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
                <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${sitemaps.map(sitemap => `<sitemap>
                    <loc>${sitemap}</loc>
                  </sitemap>`).join('\n')}
                </sitemapindex>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}