import { getAllPosts } from '@/lib/posts';

const SITE_URL = 'https://www.gophertelosengine.com';

export default function sitemap() {
  const staticRoutes = ['', '/method', '/scope', '/shop', '/blog', '/contact', '/demo'].map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.8,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(`${post.date}T00:00:00`) : undefined,
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...posts];
}
