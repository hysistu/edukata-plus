'use client'

import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import type { ResolvedSiteContent } from '@/lib/site-content'

type ApproachProps = {
  content: ResolvedSiteContent['approach']
}

export function Approach({ content }: ApproachProps) {
  return (
    <section className="bg-[var(--color-forest)] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal direction="left" className="max-w-xl">
          <h2 className="font-display text-[2.3rem] tracking-[-0.04em] md:text-[3.1rem]">
            {content.headline}
          </h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-white/82 md:text-[1.12rem]">
            {content.intro}
          </p>
        </Reveal>

        <Stagger className="space-y-10 md:space-y-12" delay={0.1}>
          {content.points.map((point) => (
            <StaggerItem key={point.title}>
              <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-[var(--color-gold-bright)]">
                {point.title}
              </h3>
              <p className="mt-3 max-w-xl text-[1rem] leading-relaxed text-white/88 md:text-[1.05rem]">
                {point.text}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
