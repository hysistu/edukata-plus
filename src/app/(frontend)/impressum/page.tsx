import Link from 'next/link'

export const metadata = {
  title: 'Impressum · edukataplus',
}

export default function ImpressumPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-16 md:px-8">
      <Link className="text-sm text-[var(--color-ink-soft)] underline underline-offset-4" href="/">
        ← Zurück
      </Link>
      <h1 className="mt-8 font-display text-4xl tracking-[-0.04em]">Impressum</h1>
      <div className="mt-8 space-y-4 text-[var(--color-ink-soft)] leading-relaxed">
        <p>[IHR NAME]</p>
        <p>edukataplus</p>
        <p>[ADRESSE]</p>
        <p>[TELEFONNUMMER]</p>
        <p>info@edukataplus.ch</p>
        <p className="pt-4 text-sm">
          Bitte ersetzen Sie die Platzhalter im Payload Admin unter «Website Inhalt».
        </p>
      </div>
    </main>
  )
}
