'use client'

import { useState, type FormEvent } from 'react'

import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import type { ResolvedSiteContent } from '@/lib/site-content'

type ContactProps = {
  content: ResolvedSiteContent['contact']
}

export function Contact({ content }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setError('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          contact: formData.get('contact'),
          message: formData.get('message'),
        }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error || 'Senden fehlgeschlagen')
      }

      form.reset()
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Etwas ist schiefgelaufen.')
    }
  }

  return (
    <section className="bg-[var(--color-sage)] px-5 py-20 md:px-8 md:py-28" id="kontakt">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-[2.2rem] tracking-[-0.04em] text-[var(--color-ink)] md:text-[3rem]">
            {content.headline}
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--color-ink-soft)] md:text-[1.12rem]">
            {content.text}
          </p>

          <div className="mt-8 space-y-2 text-[1.05rem]">
            <a
              className="block text-[var(--color-ink)] underline decoration-[var(--color-ink)]/25 underline-offset-4 transition hover:decoration-[var(--color-ink)]"
              href={content.phone.startsWith('[') ? '#kontakt' : `tel:${content.phone.replace(/\s/g, '')}`}
            >
              {content.phone}
            </a>
            <a
              className="block text-[var(--color-ink)] underline decoration-[var(--color-ink)]/25 underline-offset-4 transition hover:decoration-[var(--color-ink)]"
              href={`mailto:${content.email}`}
            >
              {content.email}
            </a>
          </div>

          <p className="mt-8 max-w-md text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
            {content.area}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="rounded-[1.8rem] bg-white p-6 shadow-[0_20px_60px_rgba(36,58,52,0.06)] md:p-8"
            onSubmit={onSubmit}
          >
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--color-ink)]">
                {content.formLabels.name}
              </span>
              <input
                className="w-full rounded-2xl border border-[var(--color-ink)]/12 bg-white px-4 py-3.5 outline-none transition focus:border-[var(--color-forest)]"
                name="name"
                required
                type="text"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-[var(--color-ink)]">
                {content.formLabels.contact}
              </span>
              <input
                className="w-full rounded-2xl border border-[var(--color-ink)]/12 bg-white px-4 py-3.5 outline-none transition focus:border-[var(--color-forest)]"
                name="contact"
                required
                type="text"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-[var(--color-ink)]">
                {content.formLabels.message}
              </span>
              <textarea
                className="min-h-36 w-full resize-y rounded-2xl border border-[var(--color-ink)]/12 bg-white px-4 py-3.5 outline-none transition focus:border-[var(--color-forest)]"
                name="message"
                required
              />
            </label>

            <Button
              className="mt-6 w-full sm:w-auto"
              disabled={status === 'loading'}
              type="submit"
            >
              {status === 'loading' ? 'Wird gesendet…' : content.formLabels.submit}
            </Button>

            {status === 'success' ? (
              <p className="mt-4 text-sm text-[var(--color-forest)]">
                Danke – Ihre Nachricht ist angekommen. Ich melde mich bald.
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="mt-4 text-sm text-red-700">{error}</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
