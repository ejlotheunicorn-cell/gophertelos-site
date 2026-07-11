import Container from '@/components/Container';
import Button from '@/components/Button';
import DepthBar from '@/components/DepthBar';
import EmailSignup from '@/components/EmailSignup';
import { site } from '@/data/site';

const pillars = [
  {
    title: 'Transparent first',
    body: 'We start on English’s most predictable spellings and add irregularity one controlled step at a time.',
  },
  {
    title: 'The 3×7 Syntactic Matrix',
    body: 'Three sentence tiers — Simple, Compound, Complex — across seven rows in every lesson.',
  },
  {
    title: 'Real sentences, always',
    body: 'Every sentence is meaningful. Never a nonsense drill string, not once.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-teal/10 to-transparent" />
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
              Pre-K – Grade 6 · Structured Literacy
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-brand-ink sm:text-6xl">
              A reading system built for the reader English usually fails first.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-ink/80">
              The Gopher Telos Engine is a structured literacy curriculum, Pre-K through Grade 6,
              built around an original method — the 3×7 Syntactic Matrix — for dyslexic and
              developing readers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/method">See the Method</Button>
              <Button href={site.etsyShopUrl} variant="secondary" external>
                Shop on Etsy
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission body + arc-at-a-glance */}
      <section className="py-8">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-5 text-lg leading-relaxed text-brand-ink/85">
            <p>
              English is one of the most irregular alphabetic languages in the world. Most phonics
              programs respond by drilling isolated sounds. We respond by sequencing instruction from
              English’s most transparent patterns toward its trickiest ones — one controlled step at
              a time — while keeping real sentence structure at the center of every single lesson.
            </p>
            <p className="font-display text-xl italic text-brand-teal">
              Built at our own kitchen table, by a homeschooling family, for readers like ours.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-sand bg-white p-6 shadow-sm">
            <h2 className="font-display text-lg font-semibold text-brand-ink">
              The K–6 arc at a glance
            </h2>
            <p className="mt-2 text-sm text-brand-ink/70">
              One coherent system, deepening by grade — from fully transparent spelling toward full
              English.
            </p>
            <div className="mt-4">
              <DepthBar />
            </div>
            <div className="mt-2 flex justify-between text-xs font-semibold text-brand-ink/60">
              <span>Pre-K / K</span>
              <span>Grade 6</span>
            </div>
            <Button href="/scope" variant="secondary" className="mt-5 w-full">
              See the full scope
            </Button>
          </div>
        </Container>
      </section>

      {/* Three pillars */}
      <section className="py-12">
        <Container className="grid gap-5 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-brand-sand bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-teal">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">{p.body}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Email capture */}
      <section className="py-12">
        <Container>
          <EmailSignup />
        </Container>
      </section>
    </>
  );
}
