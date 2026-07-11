import { Fraunces, Nunito_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// Warm serif for display + a clean, friendly sans for body copy.
const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://gophertelosengine.com'),
  title: {
    default: 'Gopher Telos Engine — Structured Literacy, Pre-K–Grade 6',
    template: '%s · Gopher Telos Engine',
  },
  description:
    'A structured literacy curriculum, Pre-K through Grade 6, built around the 3×7 Syntactic Matrix — an original method for dyslexic and developing readers.',
  openGraph: {
    title: 'Gopher Telos Engine — Structured Literacy, Pre-K–Grade 6',
    description:
      'A structured literacy curriculum built around the 3×7 Syntactic Matrix for dyslexic and developing readers.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
