'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/ui/Button'
import type { ResolvedSiteContent } from '@/lib/site-content'

type HeroProps = {
  content: ResolvedSiteContent
}

export function Hero({ content }: HeroProps) {
  const reduceMotion = useReducedMotion()
  const { hero, tagline, heroImageUrl } = content

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16" id="top">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(196,165,116,0.18),transparent_70%)] blur-2xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(42,63,57,0.08),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-muted)] md:text-[0.82rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {tagline}
          </motion.p>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[14ch] font-display text-[2.35rem] leading-[1.08] tracking-[-0.045em] text-[var(--color-ink)] sm:text-[3rem] lg:text-[3.55rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-[38rem] text-[1.05rem] leading-relaxed text-[var(--color-ink-soft)] md:text-[1.12rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.text}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href="#kontakt">{hero.primaryCta}</Button>
            <Button href="#angebot" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--color-mist)] shadow-[0_30px_80px_rgba(36,58,52,0.08)] sm:rounded-[2.4rem]">
            {heroImageUrl ? (
              <Image
                alt="Hero"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                src={heroImageUrl}
              />
            ) : (
              <div className="flex h-full items-center justify-center px-8 text-center text-[0.95rem] leading-relaxed text-[var(--color-ink-muted)]">
                {hero.imagePlaceholder}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
