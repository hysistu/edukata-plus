'use client'

import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import type { ResolvedSiteContent } from '@/lib/site-content'

type ProcessProps = {
  content: ResolvedSiteContent['process']
}

export function Process({ content }: ProcessProps) {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28" id="ablauf">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[2.2rem] tracking-[-0.04em] text-[var(--color-ink)] md:text-[3rem]">
            {content.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-[var(--color-ink-soft)] md:text-[1.12rem]">
            {content.intro}
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {content.steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="border-t border-[var(--color-ink)] pt-5">
                <p className="text-[0.95rem] font-medium text-[var(--color-gold)]">{step.number}</p>
                <h3 className="mt-4 text-[1.15rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {step.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 md:mt-16" delay={0.1}>
          <div className="grid gap-10 rounded-[1.6rem] bg-[var(--color-sage-deep)] px-7 py-9 md:grid-cols-2 md:gap-12 md:px-10 md:py-11">
            <div>
              <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                {content.agencies.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
                {content.agencies.text}
              </p>
            </div>
            <div>
              <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                {content.families.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
                {content.families.text}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
