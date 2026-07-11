# Deploying to the web

The project is a git repo, ready to push. Below is the fastest path: **GitHub →
Vercel → your domain.** (You only do steps 1–2 once.)

## 1. Put the code on GitHub

Create an empty repo at https://github.com/new (name it e.g. `gophertelos-site`,
keep it Private if you like — don't add a README/gitignore, this repo already has
them). Then, in a terminal:

```bash
cd "gophertelos-site"
git remote add origin https://github.com/YOUR_USERNAME/gophertelos-site.git
git push -u origin main
```

## 2. Import into Vercel

1. Sign up at https://vercel.com with your GitHub account (free "Hobby" plan).
2. **Add New → Project → Import** your `gophertelos-site` repo.
3. Vercel auto-detects Next.js. Leave all defaults. Click **Deploy**.
4. ~1 minute later you get a live URL like `gophertelos-site.vercel.app`. Open it,
   click through all 5 pages.

That URL is already a real, shareable site. Everything below is polish.

## 3. Point gophertelosengine.com at it

You bought the domain through **WordPress.com / Automattic**, so DNS is managed
there.

1. In **Vercel** → your project → **Settings → Domains** → add
   `gophertelosengine.com`. Vercel will show you the exact DNS records it wants —
   typically:
   - An **A record** for the root (`@`) → `76.76.21.21`
   - A **CNAME** for `www` → `cname.vercel-dns.com`
   > Use whatever values Vercel shows you — they're authoritative if they differ.
2. In **WordPress.com** → **Upgrades → Domains →** `gophertelosengine.com` →
   **Manage DNS / Name servers → DNS records**. Add/replace the two records above.
   (If WordPress.com is currently serving a site on the domain, this repoint makes
   the domain show the new Vercel site instead.)
3. Back in Vercel, the domain flips to **Valid** once DNS propagates (minutes to a
   few hours). Vercel issues the HTTPS certificate automatically.
4. Update `metadataBase` in `app/layout.js` to `https://gophertelosengine.com`
   (it's already set to that — just confirm), commit, and push.

> Alternative that's sometimes simpler on WordPress.com: instead of individual
> records, set the domain's **name servers** to Vercel's and let Vercel manage
> everything. Vercel's Domains screen offers this option and lists the name
> servers to use.

## Making changes later

Edit any file, then:

```bash
git add -A && git commit -m "describe the change" && git push
```

Vercel automatically rebuilds and redeploys on every push. That's how you'll swap
in the real scope-and-sequence text, connect the email/contact forms, and add
Grades 2–6 as they launch.
