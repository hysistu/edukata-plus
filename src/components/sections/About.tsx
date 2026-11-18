'use client'

import Image from 'next/image'

import { Reveal } from '@/components/motion/Reveal'
import type { ResolvedSiteContent } from '@/lib/site-content'

type AboutProps = {
  content: ResolvedSiteContent['about']
  accentUrl: string | null
  portraitUrl: string | null
}

export function About({ content, accentUrl, portraitUrl }: AboutProps) {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28" id="ueber-mich">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="grid items-end gap-8 border-b-[3px] border-[var(--color-ink)] pb-10 md:grid-cols-[0.55fr_1.45fr] md:gap-12 md:pb-12">
            <div className="relative aspect-[5/3] overflow-hidden rounded-[1.2rem] bg-[var(--color-mist)]">
              {accentUrl ? (
                <Image
                  alt="Über mich"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  src={accentUrl}
                />
              ) : null}
            </div>
            <div>
              <h2 className="font-display text-[2.4rem] tracking-[-0.04em] text-[var(--color-ink)] md:text-[3.2rem]">
                {content.headline}
              </h2>
              <p className="mt-4 text-[1.05rem] text-[var(--color-ink-soft)] md:text-[1.12rem]">
                {content.intro}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[0.75fr_1.25fr] md:gap-14 lg:gap-16">
          <Reveal direction="left">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem] bg-[var(--color-mist)]">
              {portraitUrl ? (
                <Image
                  alt="Porträt"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  src={portraitUrl}
                />
              ) : (
                <div className="flex h-full items-center justify-center px-6 text-center text-[var(--color-ink-muted)]">
                  {content.portraitPlaceholder}
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center space-y-6">
            {content.body.map((paragraph) => (
              <p
                className="text-[1.02rem] leading-relaxed text-[var(--color-ink-soft)] md:text-[1.08rem]"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
