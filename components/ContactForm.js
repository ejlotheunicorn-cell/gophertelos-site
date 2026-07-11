import { site } from '@/data/site';

// Contact form. Posts to whatever endpoint you set in data/site.js
// (Formspree, Web3Forms, a WordPress endpoint, etc.).
export default function ContactForm() {
  const configured = Boolean(site.contact.actionUrl);

  const inputCls =
    'mt-1 w-full rounded-xl border border-brand-sand bg-white px-4 py-3 outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30';

  return (
    <form action={site.contact.actionUrl || '#'} method={site.contact.method} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-brand-ink">
            Name
          </label>
          <input id="name" name="name" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-brand-ink">
            Email
          </label>
          <input id="email" type="email" name="email" required className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-bold text-brand-ink">
          I’m a…
        </label>
        <select id="role" name="role" className={inputCls}>
          <option>Parent</option>
          <option>Educator</option>
          <option>Interested in partnership or licensing</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-brand-ink">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputCls} />
      </div>

      {/* simple spam honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <button
        type="submit"
        className="rounded-full bg-brand-teal px-7 py-3 font-bold text-white transition hover:bg-brand-tealDark"
      >
        Send message
      </button>

      {!configured && (
        <p className="text-xs text-brand-plum">
          ⚙️ Not connected yet — add your form endpoint (e.g. Formspree) in <code>data/site.js</code>.
          See the README.
        </p>
      )}
    </form>
  );
}
