import Link from 'next/link'

export const metadata = {
  title: 'Datenschutz · edukataplus',
}

export default function DatenschutzPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-16 md:px-8">
      <Link className="text-sm text-[var(--color-ink-soft)] underline underline-offset-4" href="/">
        ← Zurück
      </Link>
      <h1 className="mt-8 font-display text-4xl tracking-[-0.04em]">Datenschutz</h1>
      <div className="mt-8 space-y-4 text-[var(--color-ink-soft)] leading-relaxed">
        <p>
          Diese Website speichert Kontaktanfragen in einer Datenbank (Payload CMS), damit Anfragen
          beantwortet werden können. Es werden nur die Angaben verarbeitet, die Sie im Formular
          eingeben.
        </p>
        <p>
          Medien-Uploads können lokal oder in einem konfigurierten Objektspeicher (z. B. S3 / Cloudflare
          R2) abgelegt werden.
        </p>
        <p className="pt-4 text-sm">
          Ergänzen Sie hier Ihre vollständige Datenschutzerklärung vor dem Go-Live.
        </p>
      </div>
    </main>
  )
}
