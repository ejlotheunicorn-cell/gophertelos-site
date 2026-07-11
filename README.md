# Gopher Telos Engine — Website

A lightweight 5-page brand-home site built with **Next.js** (App Router) and
**Tailwind CSS**. It's a brochure site, not a store — every purchase action links
out to Etsy. The strategic job of this site is credibility + an owned email list.

## Pages

| Page | File | What's on it |
| --- | --- | --- |
| Home | `app/page.js` | Hook, mission, K–6 arc, email signup |
| The Method | `app/method/page.js` | The research/"why," plus the OpenDyslexic demo |
| Scope & Sequence | `app/scope/page.js` | Depth Color bar + the full K–6 table |
| Shop | `app/shop/page.js` | Grade cards → Etsy listings |
| Contact | `app/contact/page.js` | Contact form + email signup |

---

## Running it locally

You'll need [Node.js](https://nodejs.org) (v18 or newer). In a terminal:

```bash
cd "gophertelos-site"
npm install       # first time only — downloads dependencies
npm run dev       # start the dev server
```

Then open **http://localhost:3000**. Edits save live.

> **Google Drive note:** `npm install` creates a big `node_modules/` folder.
> Drive will try to sync all of it, which is slow and pointless. It's already
> in `.gitignore`. For smoother development, consider copying this project
> folder somewhere outside Google Drive (e.g. `~/Sites/`) while you work — the
> live site deploys from Git/Vercel, not from Drive.

---

## Wiring up links & forms

**Everything you need to fill in lives in two files.** Search for `TODO`.

### 1. `data/site.js` — links and form endpoints

- **`etsyShopUrl`** — your Etsy shop URL (the header/footer "Shop on Etsy" buttons).
- **`etsy.prek / g1 / g2`** — the individual Etsy listing URLs for each grade card.
- **`emailSignup.actionUrl`** — see "Email list" below.
- **`contact.actionUrl`** — see "Contact form" below.

### 2. `data/grades.js` — grade content

⚠️ The `skills:` and `blurb:` lines are **placeholders written from the brief** —
they are *not* copied from your Parent & Teacher Guide. **Replace them with your
real "New skills introduced" text before publishing.** Adding a grade later (3–6)
= flip its `status` from `'coming'` to `'available'` and fill in its details.

### Email list (the important one)

My recommendation: use a dedicated email service with a free tier rather than
keeping WordPress alive just to catch signups. It gives you real list management
and one URL to paste. Any of these work:

- **Buttondown** — simplest. Sign up, and your form action is
  `https://buttondown.email/api/emails/embed-subscribe/YOURNAME`.
  Set `emailField: 'email'` in `data/site.js`.
- **Mailchimp** — Audience → Signup forms → Embedded form. Copy the `<form action="...">`
  URL into `emailSignup.actionUrl`. Mailchimp's email field is `EMAIL` (the default).
- **ConvertKit** — a form's action is `https://app.convertkit.com/forms/ID/subscriptions`.
  Set `emailField: 'email_address'`.

Paste the URL into `emailSignup.actionUrl`, set the matching `emailField`, save.
The signup form goes live automatically (the "not connected yet" note disappears).

> Keeping WordPress instead? If it has an embeddable subscribe form (MailPoet,
> Mailchimp-for-WP), paste that form's `action` URL and field name here just the
> same. But a standalone email service is less to maintain.

### Contact form

Use a no-backend form service — no server code needed:

- **Formspree** (formspree.io) — make a form, copy `https://formspree.io/f/xxxx`
  into `contact.actionUrl`. It emails you every submission.
- **Web3Forms** (web3forms.com) — free, add your access key as a hidden field.

---

## Design system (already built in)

- **Colors** live in `tailwind.config.js`: `brand.*` (teal-forward palette) and
  `depth.*` (the teal→plum Depth Color System). The depth hex values are also in
  `data/grades.js` so the grade cards and scope table stay in sync.
- **Fonts:** Fraunces (warm display serif) + Nunito Sans (body), auto-loaded via
  `next/font`. OpenDyslexic loads from a CDN only for the demo callout on the
  Method page.
- **Logo:** currently a 🐉 emoji placeholder — see `public/README-ASSETS.txt`.

---

## Deploying (with a placeholder domain first)

You haven't bought the domain yet — that's fine. Deploy now to a free URL, buy
the domain later, then point it.

1. Push this folder to a **GitHub** repo (or use Vercel's drag-and-drop).
2. Go to [vercel.com](https://vercel.com), import the repo. Vercel auto-detects
   Next.js — just click **Deploy**.
3. You get a free `your-project.vercel.app` URL. Confirm every page renders and
   the Etsy links work.
4. When you buy the domain (e.g. `gophertelosengine.com`): Vercel → Project →
   Settings → **Domains** → add it, and follow their DNS instructions. Update
   `metadataBase` in `app/layout.js` to the real domain.

Netlify works too (build command `npm run build`), but Vercel is the smoothest
path for Next.js.

---

## Pre-launch checklist

- [ ] Replace placeholder `skills`/`blurb` copy in `data/grades.js` with real guide text
- [ ] Fill in all `TODO` URLs in `data/site.js` (Etsy shop, 3 listings, samples)
- [ ] Connect the email provider (`emailSignup.actionUrl`)
- [ ] Connect the contact form (`contact.actionUrl`)
- [ ] Add `public/logo.png` and swap out the 🐉 placeholder
- [ ] Add `app/favicon.ico`
- [ ] Deploy, click through all 5 pages, test both forms
