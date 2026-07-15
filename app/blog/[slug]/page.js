import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import Button from '@/components/Button';
import EmailSignup from '@/components/EmailSignup';
import { getPostSlugs, getPostBySlug, formatDate } from '@/lib/posts';

const SITE_URL = 'https://gophertelosengine.com';

// Only pre-known slugs are served; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

function safeGet(slug) {
  try {
    return getPostBySlug(slug);
  } catch {
    return null;
  }
}

export function generateMetadata({ params }) {
  const post = safeGet(params.slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date || undefined,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default function PostPage({ params }) {
  const post = safeGet(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date || undefined,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'Gopher Telos Engine' },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <article className="pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-brand-sand bg-gradient-to-b from-brand-teal/10 to-transparent">
        <Container className="py-12 sm:py-16">
          <Link href="/blog" className="text-sm font-bold text-brand-teal hover:underline">
            ← All posts
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-ink/50">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.tags?.map((tag) => (
              <span key={tag} className="rounded-full bg-brand-sand px-2.5 py-0.5 text-brand-ink/60">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-brand-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-brand-ink/60">By {post.author}</p>
        </Container>
      </header>

      {/* Body */}
      <Container className="py-10 sm:py-14">
        <div
          className="prose prose-lg max-w-3xl prose-headings:font-display prose-headings:text-brand-ink prose-h2:mt-10 prose-h2:text-2xl prose-p:text-brand-ink/85 prose-p:leading-relaxed prose-a:font-semibold prose-a:text-brand-teal prose-strong:text-brand-ink prose-li:text-brand-ink/85 prose-li:marker:text-brand-teal"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Footer CTA */}
        <div className="mt-12 max-w-3xl border-t border-brand-sand pt-10">
          <div className="flex flex-wrap gap-3">
            <Button href="/method">Explore the Method</Button>
            <Button href="/shop" variant="secondary">
              See the curriculum
            </Button>
          </div>
          <div className="mt-10">
            <EmailSignup />
          </div>
        </div>
      </Container>
    </article>
  );
}
