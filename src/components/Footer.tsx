import type { ResolvedSiteContent } from '@/lib/site-content'

type FooterProps = {
  content: ResolvedSiteContent['footer']
  impressumUrl?: string
  privacyUrl?: string
}

export function Footer({
  content,
  impressumUrl = '/impressum',
  privacyUrl = '/datenschutz',
}: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-ink)]/10 bg-[var(--color-sage)] px-5 py-8 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-[var(--color-ink-soft)] sm:flex-row sm:items-center sm:justify-between">
        <p>{content.copyright}</p>
        <div className="flex gap-5">
          <a className="underline underline-offset-4" href={impressumUrl}>
            {content.impressumLabel}
          </a>
          <a className="underline underline-offset-4" href={privacyUrl}>
            {content.privacyLabel}
          </a>
        </div>
      </div>
    </footer>
  )
}
