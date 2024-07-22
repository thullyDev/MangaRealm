import { DOMAIN_ORIGIN } from "../../utilities/config";

export async function GET() {
  const sitemaps = [
    `${DOMAIN_ORIGIN}/sitemaps/sitemap-filter-pages.xml`,
    `${DOMAIN_ORIGIN}/sitemaps/sitemap-genres.xml`,
    `${DOMAIN_ORIGIN}/sitemaps/sitemap-type.xml`,
    `${DOMAIN_ORIGIN}/sitemaps/sitemap-status.xml`,
    `${DOMAIN_ORIGIN}/sitemaps/sitemap-manga-pages.xml`,
  ];

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