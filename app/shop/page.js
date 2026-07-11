import Container from '@/components/Container';
import GradeCard from '@/components/GradeCard';
import { gradeCards } from '@/data/grades';

export const metadata = {
  title: 'Shop',
  description:
    'The Gopher Telos Engine, available grade by grade. Try a free Day 1 sample, then shop the full program on Etsy.',
};

export default function ShopPage() {
  return (
    <>
      <section className="border-b border-brand-sand bg-gradient-to-b from-brand-teal/10 to-transparent">
        <Container className="py-14 sm:py-16">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Shop
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
            Available now, grade by grade.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-ink/80">
            Every purchase happens on our Etsy shop — your checkout, reviews, and instant download
            all live there. More grades are on the way.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gradeCards.map((grade) => (
              <GradeCard key={grade.id} grade={grade} />
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-brand-ink/60">
            New grades drop here as they launch.{' '}
            <a href="/contact" className="font-bold text-brand-teal hover:underline">
              Get on the list
            </a>{' '}
            to hear first.
          </p>
        </Container>
      </section>
    </>
  );
}
