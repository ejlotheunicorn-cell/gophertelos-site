import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

// Add a new post = drop a `.md` file (with frontmatter) into content/blog/.
// Frontmatter fields: title, date (YYYY-MM-DD), description, author, tags.

export function getPostSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || slug,
    date: data.date || null,
    description: data.description || '',
    author: data.author || 'Gopher Telos Engine',
    tags: data.tags || [],
    html: marked.parse(content),
  };
}

export function getAllPosts() {
  return getPostSlugs()
    .map(getPostBySlug)
    .sort((a, b) => (String(a.date) < String(b.date) ? 1 : -1));
}

export function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
