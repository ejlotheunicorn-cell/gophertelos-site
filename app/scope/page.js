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
            One system. Six grades. A coherent arc, not six separate products.
          </h1>

          {/* Depth Color System header bar */}
          <div className="mt-8">
            <DepthBar />
            <div className="mt-2 flex justify-between text-xs font-semibold text-brand-ink/60">
              <span>Transparent · Pre-K / K</span>
              <span>Full English · Grade 6</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <ScopeTable />

          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-lg italic leading-relaxed text-brand-ink/80">
            Each grade keeps the same 3×7 structure and adds the next layer of orthographic depth,
            sequenced the way structured-literacy programs introduce skills — from fully transparent
            spelling toward full English.
          </p>

          <div className="mt-10 flex justify-center">
            <Button href="/shop">Shop grade by grade</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
