import Container from '@/components/Container';
import ContactForm from '@/components/ContactForm';
import EmailSignup from '@/components/EmailSignup';

export const metadata = {
  title: 'Contact & Partnerships',
  description:
    'Questions from parents, classroom use for educators, or partnership and licensing conversations — plus signup for launch news.',
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-brand-sand">
        <Container className="py-14 sm:py-16">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Contact &amp; Partnerships
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
            Let’s talk.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-ink/80">
            Whether you’re a parent with questions, a tutor or educator interested in classroom use,
            or an organization exploring a partnership — we’d love to hear from you.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="rounded-2xl border border-brand-sand bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-brand-ink">Send a message</h2>
            <p className="mt-2 text-sm text-brand-ink/70">
              Tell us a little about who you are and we’ll get back to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Email signup, deliberately separate from the contact form */}
          <EmailSignup />
        </Container>
      </section>
    </>
  );
}
