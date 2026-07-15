import Link from 'next/link';
import Container from './Container';
import { site } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-brand-sand bg-brand-tealDark text-brand-cream">
      <Container className="grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <img
              src="/mark.png"
              alt=""
              className="h-9 w-9 flex-none rounded-lg object-cover"
            />{' '}
            Gopher Telos Engine
          </div>
          <p className="mt-3 max-w-xs text-sm text-brand-cream/70">
            Structured literacy, Pre-K–Grade 6. Built at our own kitchen table, for readers like ours.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm uppercase tracking-wide text-brand-cream/60">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/method" className="hover:underline">The Method</Link></li>
            <li><Link href="/scope" className="hover:underline">Scope &amp; Sequence</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact &amp; Partnerships</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm uppercase tracking-wide text-brand-cream/60">
            Get the curriculum
          </h2>
          <p className="mt-3 text-sm text-brand-cream/70">Every purchase happens on our Etsy shop.</p>
          <a
            href={site.etsyShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-full bg-brand-cream px-5 py-2 text-sm font-bold text-brand-tealDark hover:bg-white"
          >
            Shop on Etsy →
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-cream/50">
        © {year} Gopher Telos Engine. All rights reserved.
      </div>
    </footer>
  );
}
