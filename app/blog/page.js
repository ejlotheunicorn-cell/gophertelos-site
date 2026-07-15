import Link from 'next/link';
import Container from '@/components/Container';
import { getAllPosts, formatDate } from '@/lib/posts';

export const metadata = {
  title: 'Blog',
  description:
    'Notes on structured literacy, dyslexia, and teaching reading from transparent spelling toward full English — from the Gopher Telos Engine.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <section className="border-b border-brand-sand bg-gradient-to-b from-brand-teal/10 to-transparent">
        <Container className="py-14 sm:py-16">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Blog
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
            Notes on structured literacy &amp; dyslexia-friendly reading
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-ink/80">
            Research, method, and the thinking behind the Gopher Telos Engine — written for parents,
            tutors, and educators.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          {posts.length === 0 ? (
            <p className="text-brand-ink/70">No posts yet — check back soon.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col rounded-2xl border border-brand-sand bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-ink/50">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    {post.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-brand-sand px-2.5 py-0.5 text-brand-ink/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-brand-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-teal">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink/75">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 text-sm font-bold text-brand-teal hover:underline"
                  >
                    Read the post →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
