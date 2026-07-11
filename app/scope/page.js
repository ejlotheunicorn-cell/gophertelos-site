import Container from '@/components/Container';
import Button from '@/components/Button';
import DepthBar from '@/components/DepthBar';
import ScopeTable from '@/components/ScopeTable';

export const metadata = {
  title: 'Scope & Sequence',
  description:
    'The full Pre-K–Grade 6 arc of the Gopher Telos Engine — one coherent system, sequenced from fully transparent spelling toward full English.',
};

export default function ScopePage() {
  return (
    <>
      <section className="border-b border-brand-sand">
        <Container className="py-14 sm:py-16">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Scope &amp; Sequence
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
            How Skills Build — The K–6 Scope &amp; Sequence
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
            One coherent system. Each grade keeps the same 3×7 structure and adds the next layer of
            orthographic depth — sequenced the way structured-literacy programs introduce skills, from
            fully transparent spelling toward full English.
          </p>

          {/* Depth Color System header bar */}
          <div className="mt-8">
            <DepthBar />
            <p className="mt-3 text-center text-xs font-semibold text-brand-ink/60">
              Shallow, transparent spelling (teal) deepening to full irregular English (plum).
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <ScopeTable />

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-brand-sand bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-brand-teal">Why sequence it this way?</h2>
            <p className="mt-3 leading-relaxed text-brand-ink/85">
              Struggling and dyslexic readers do best when English is introduced from its most reliable
              patterns outward. Starting transparent (one letter, one sound) and adding irregularity one
              controlled step at a time builds decoding confidence before the trickier rules arrive — and
              keeps every sentence a real, meaningful one.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/shop">Shop grade by grade</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
