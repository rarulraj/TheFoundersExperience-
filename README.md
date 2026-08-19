# The Founders Experience

A polished marketing site for **The Founders Experience** — a curated founder community.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide icons
- Framer Motion
- Supabase-ready

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — Homepage
- `/apply` — Founder / member application
- `/partners` — Partner benefits, tiers, and sponsor form
- `/events` — Events, speakers, and updates
- `/about` — About the community

## Form submissions

Frontend forms call reusable helpers in `src/lib/submissions.ts`.

The app automatically uses **Supabase** when these environment variables are set:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Otherwise it falls back to console logging for local development.

### Supabase setup

1. Create a project at [supabase.com](https://supabase.com)
2. Run the SQL in `supabase/schema.sql` in the SQL editor
3. Copy `.env.example` to `.env.local` and fill in your project URL and anon key

Tables:
- `founder_applications`
- `partner_applications`
- `event_updates`

Review applicants in **Table Editor**. Use `status` (`new`, `reviewing`, `accepted`, `rejected`) and `notes` — do not put this in Google Sheets unless you later need to share a file.

Row Level Security is enabled — anonymous users can only insert.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rarulraj/TheFoundersExperience-)

1. Push this repository to GitHub
2. Import the project in Vercel
3. Add the Supabase environment variables in **Project Settings → Environment Variables**
4. Deploy

`vercel.json` is included with recommended security headers.
