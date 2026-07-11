import { site } from '@/data/site';

// Email list signup. Posts straight to your provider's form URL (set in
// data/site.js). Using a native form submit — no JS, no CORS headaches — which
// is exactly what Mailchimp / Buttondown / ConvertKit embedded forms expect.
export default function EmailSignup({ className = '' }) {
  const configured = Boolean(site.emailSignup.actionUrl);

  return (
    <div
      className={`rounded-2xl border border-brand-sand bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      <h2 className="font-display text-2xl font-semibold text-brand-ink">
        Get notified as new grades launch
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">
        Plus occasional notes on structured literacy and dyslexia-friendly reading. No spam — we’re
        parents too.
      </p>

      <form
        action={site.emailSignup.actionUrl || '#'}
        method={site.emailSignup.method}
        target="_blank"
        className="mt-5 flex flex-col gap-3 sm:flex-row"
      >
        <label className="sr-only" htmlFor="email-signup">
          Email address
        </label>
        <input
          id="email-signup"
          type="email"
          required
          name={site.emailSignup.emailField}
          placeholder="you@example.com"
          className="w-full flex-1 rounded-full border border-brand-sand bg-brand-cream px-5 py-3 text-base outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30"
        />
        {/* simple spam honeypot */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />
        <button
          type="submit"
          className="rounded-full bg-brand-teal px-6 py-3 font-bold text-white transition hover:bg-brand-tealDark"
        >
          Sign up
        </button>
      </form>

      {!configured && (
        <p className="mt-3 text-xs text-brand-plum">
          ⚙️ Not connected yet — add your email provider’s form URL in <code>data/site.js</code>.
          See the README.
        </p>
      )}
    </div>
  );
}
