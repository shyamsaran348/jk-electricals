import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import productsData from './data/products.json';

export async function prerender(data) {
  const helmetContext = {};
  
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  const { parseLinks } = await import('vite-prerender-plugin/parse');
  const rawLinks = parseLinks(html);
  
  // Filter out files (like .pptx, .png) and non-existent routes
  const validLinks = rawLinks.filter(link => !link.match(/\.[a-zA-Z0-9]+$/) && !['/privacy', '/terms'].includes(link));

  // Generate all product slugs to guarantee they are rendered
  const productSlugs = productsData.map(p => `/products/${p.slug}`);

  // Extract meta tags roughly from Helmet if possible
  // Helmet gives us .title.toString() which returns something like "<title data-rh=\"true\">website</title>"
  // We can just regex out the contents.
  let title = helmet?.title?.toString().match(/<title[^>]*>(.*?)<\/title>/)?.[1] || '';
  
  let headElements = new Set();
  if (helmet?.meta) {
    const metaStr = helmet.meta.toString();
    const descMatch = metaStr.match(/content="([^"]*)"/);
    if (descMatch) {
      headElements.add({ type: 'meta', props: { name: 'description', content: descMatch[1] } });
    }
  }

  return {
    html,
    links: new Set([
      ...validLinks, 
      '/', '/about', '/products', '/clients', '/contact', '/catalog', '/projects', '/resources',
      ...productSlugs
    ]),
    head: {
      ...(title ? { title } : {}),
      ...(headElements.size > 0 ? { elements: headElements } : {})
    }
  };
}
