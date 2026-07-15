import Container from '@/components/Container';
import GradeCard from '@/components/GradeCard';
import { gradeCards } from '@/data/grades';

export const metadata = {
  title: 'Shop',
  description:
    'The Gopher Telos Engine, available grade by grade. Try a free Day 1 sample, then shop the full program on Etsy.',
};

// Companion products from the same family — shown tastefully below the curriculum.
const companions = [
  {
    title: 'Bad Dreams',
    emoji: '📖',
    blurb: 'A children’s book by Joel Fowler, for the worries that show up at bedtime.',
    cta: 'Find it on Amazon',
    href: 'https://www.amazon.com/Bad-Dreams-Joel-Fowler-ebook/dp/B0GZFLGHQ7',
  },
  {
    title: 'Ejlo’s Feelings Journal',
    emoji: '💛',
    blurb: 'A feelings journal that helps kids name and work through big emotions.',
    cta: 'Shop on Etsy',
    href: 'https://www.etsy.com/listing/4533654788/ejlos-feelings-journal-kids-emotional',
  },
];

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

      {/* Companion resources — from the same family */}
      <section className="border-t border-brand-sand bg-brand-sand/30 py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-plum">
              More from our family
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-brand-ink">
              Beyond reading — for the whole child
            </h2>
            <p className="mt-3 text-brand-ink/75">
              A couple of other things we’ve made for kids and the big feelings that come with
              growing up.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {companions.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-brand-sand bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-2xl" aria-hidden>
                  {item.emoji}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink/70">{item.blurb}</p>
                <span className="mt-4 text-sm font-bold text-brand-teal group-hover:underline">
                  {item.cta} →
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
