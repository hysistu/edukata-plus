# edukataplus

One-page website for family accompaniment, youth coaching and supervised visitation in Zurich.

Stack: **Next.js** + **Payload CMS 3** + **Postgres** + optional **S3/R2** media storage.

## Quick start (local)

```bash
pnpm install
docker compose up -d          # starts Postgres on :5432
cp .env.example .env          # if needed
pnpm dev
```

- Website: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

Create the first admin user in `/admin`, then seed editable page content:

```bash
pnpm seed
```

## Deploy on Vercel

SQLite **does not work** on Vercel (no persistent filesystem). You need Postgres.

1. Create a free Postgres DB (Neon, Supabase, or Vercel Postgres).
2. In the Vercel project → **Settings → Environment Variables**, set at least:
   - `DATABASE_URL` = your Postgres connection string (`?sslmode=require` for Neon/etc.)
   - `PAYLOAD_SECRET` = a long random string
3. Redeploy.
4. Open `https://your-domain/admin` and create the first user.
5. (Recommended) Configure S3/R2 vars too — local `/media` uploads do not persist on Vercel.

## Content & media

All landing-page copy lives in the Payload global **Website Inhalt**.

Contact form submissions are stored in the **messages** collection.

### File hosting

By default, uploads go to the local `/media` folder (fine for local dev only).

To host files on S3-compatible storage (AWS S3, Cloudflare R2, MinIO), set:

```env
S3_BUCKET=your-bucket
S3_ACCESS_KEY_ID=...
S3_SECRET_ACCESS_KEY=...
S3_REGION=auto
S3_ENDPOINT=https://<accountid>.r2.cloudflarestorage.com
```

## Scripts

| Command               | Description             |
| --------------------- | ----------------------- |
| `pnpm dev`            | Start Next.js + Payload |
| `pnpm build`          | Production build        |
| `pnpm start`          | Run production server   |
| `pnpm seed`           | Seed default page copy  |
| `pnpm generate:types` | Refresh Payload types   |

## Notes

Placeholder texts like `[IHR NAME]` / `[TELEFONNUMMER]` match the design mockups — replace them in the admin before going live.
