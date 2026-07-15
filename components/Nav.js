'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Container from './Container';

const links = [
  { href: '/', label: 'Home' },
  { href: '/method', label: 'The Method' },
  { href: '/scope', label: 'Scope & Sequence' },
  { href: '/shop', label: 'Shop' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-sand/70 bg-brand-cream/90 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/mark.png"
            alt="Gopher Telos Engine logo"
            className="h-12 w-12 flex-none rounded-xl object-cover ring-1 ring-black/5"
          />
          <span className="font-display text-lg font-semibold leading-tight text-brand-ink">
            Gopher Telos Engine
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active ? 'bg-brand-teal text-white' : 'text-brand-ink/80 hover:bg-brand-sand'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-brand-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="mb-1.5 block h-0.5 w-6 bg-current" />
          <span className="mb-1.5 block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-brand-sand bg-brand-cream md:hidden">
          <Container className="flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-bold ${
                  pathname === l.href ? 'text-brand-teal' : 'text-brand-ink/80'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
