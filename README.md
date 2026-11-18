# edukataplus

One-page website for family accompaniment, youth coaching and supervised visitation in Zurich.

Stack: **Next.js** + **Payload CMS 3** + **SQLite** (local) + optional **S3/R2** media storage.

## Quick start

```bash
pnpm install
pnpm dev
```

- Website: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

Create the first admin user in `/admin`, then seed editable page content:

```bash
pnpm seed
```

## Content & media

All landing-page copy lives in the Payload global **Website Inhalt**.

Contact form submissions are stored in the **messages** collection.

### File hosting

By default, uploads go to the local `/media` folder.

To host files on S3-compatible storage (AWS S3, Cloudflare R2, MinIO), set these in `.env`:

```env
S3_BUCKET=your-bucket
S3_ACCESS_KEY_ID=...
S3_SECRET_ACCESS_KEY=...
S3_REGION=auto
S3_ENDPOINT=https://<accountid>.r2.cloudflarestorage.com
```

When those variables are present, Payload switches media storage to S3 automatically.

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `pnpm dev`    | Start Next.js + Payload  |
| `pnpm build`  | Production build         |
| `pnpm start`  | Run production server    |
| `pnpm seed`   | Seed default page copy   |
| `pnpm generate:types` | Refresh Payload types |

## Notes

Placeholder texts like `[IHR NAME]` / `[TELEFONNUMMER]` match the design mockups — replace them in the admin before going live.
