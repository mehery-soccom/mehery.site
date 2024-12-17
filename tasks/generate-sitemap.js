const fs = require('fs');

const json = require('../resources/_helper/sitemap-routes.json');
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

json.urls.forEach(url => {
  xml += `  <url>\n`;
  xml += `    <loc>${url.loc}</loc>\n`;
  xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
  xml += `    <priority>${url.priority}</priority>\n`;
  xml += `  </url>\n`;
});

xml += '</urlset>';

fs.writeFileSync('resources/_helper/sitemap.xml', xml);
