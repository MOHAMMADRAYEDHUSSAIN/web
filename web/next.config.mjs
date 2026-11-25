/** @type {import('next').NextConfig} */
const nextConfig = {
  // Full static HTML export: every page ships pre-rendered so search engines
  // and AI crawlers (GPTBot, PerplexityBot, ClaudeBot) can read it without JS.
  output: 'export',
  images: { unoptimized: true },
  // Pages are linked without .html (/service-area); vercel.json redirects the old .html URL.
  trailingSlash: false,
};
export default nextConfig;
