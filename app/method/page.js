import Container from '@/components/Container';
import Button from '@/components/Button';
import { site } from '@/data/site';

export const metadata = {
  title: 'The Method',
  description:
    'Why English is an unusually hard alphabet, the shallow-language-environment strategy, and the 3×7 Syntactic Matrix at the heart of the Gopher Telos Engine.',
};

const sections = [
  {
    heading: 'The Problem: English Is an Unusually Hard Alphabet',
    body: 'In transparent languages like Italian or Spanish, one letter almost always makes one sound — dyslexia shows up in only about 3% of readers there, mostly as a speed issue. In English, one letter can make many sounds, and dyslexia prevalence is closer to 10%, affecting both accuracy and decoding.',
  },
  {
    heading: 'The Strategy: Building a Shallow Language Environment',
    body: 'Rather than starting children on English’s hardest patterns, the Gopher Telos Engine sequences transparent, one-letter-one-sound words first, then adds irregular spellings one controlled step at a time — giving developing readers a foundation of decoding confidence before they meet English’s trickier rules.',
  },
  {
    heading: 'The 3×7 Syntactic Matrix',
    body: 'Most phonics programs spend nearly all their time on individual sounds and rarely touch sentence structure. This program puts syntax at the center with a 3×7 Matrix: three sentence tiers — Simple, Compound, and Complex — across seven rows per lesson. Every sentence is real and meaningful — never a nonsense drill string.',
  },
  {
    heading: 'What the Research Says',
    body: 'Structured Literacy covers six strands: phonology, sound-symbol correspondence, syllables, morphology, syntax, and semantics. Most programs spend nearly all their time on just the first two. Combining phonics, vocabulary, and syntax instruction together tends to produce stronger outcomes than teaching any one in isolation (Hasbrouck & Tindal, 2017, informs our fluency benchmarks).',
  },
  {
    heading: 'Why “Gopher Telos”',
    body: '“Gopher” is the wood used to build a vessel meant to survive a flood — a structure that keeps readers afloat in deep, unpredictable spelling. “Telos” is Greek for a perfected end, or complete design — the destination this program is built toward: a reader who can navigate English with real confidence.',
  },
];

export default function MethodPage() {
  return (
    <>
      <section className="border-b border-brand-sand bg-gradient-to-b from-brand-teal/10 to-transparent">
        <Container className="py-16 sm:py-20">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            The Method
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
            The research, and the “why,” behind the Engine.
          </h1>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl space-y-12">
          {sections.map((s, i) => (
            <div key={s.heading}>
              <h2 className="font-display text-2xl font-semibold text-brand-ink">{s.heading}</h2>
              <p className="mt-3 text-lg leading-relaxed text-brand-ink/85">{s.body}</p>

              {/* OpenDyslexic demo callout, placed right after the Matrix section */}
              {i === 2 && (
                <div className="mt-6 rounded-2xl border border-brand-teal/30 bg-white p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-teal">
                    This is what your child will actually read
                  </p>
                  <p className="mt-3 font-dyslexic text-xl leading-relaxed text-brand-ink">
                    The big dog ran to the pond, and the frog hid in the reeds.
                  </p>
                  <p className="mt-3 text-sm text-brand-ink/60">
                    Our print materials are set in OpenDyslexic — a typeface weighted at the bottom of
                    each letter to reduce flipping and crowding for dyslexic readers.
                  </p>
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-wrap gap-3 border-t border-brand-sand pt-10">
            <Button href="/scope">See the full Scope &amp; Sequence</Button>
            <Button href={site.etsyShopUrl} variant="secondary" external>
              Shop on Etsy
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
