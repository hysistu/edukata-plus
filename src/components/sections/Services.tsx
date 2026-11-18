'use client'

import { ServiceIcon } from '@/components/icons/ServiceIcons'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import type { ResolvedSiteContent } from '@/lib/site-content'

type ServicesProps = {
  content: ResolvedSiteContent['services']
}

export function Services({ content }: ServicesProps) {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28" id="angebot">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[2.2rem] tracking-[-0.04em] text-[var(--color-ink)] md:text-[3rem]">
            {content.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-[var(--color-ink-soft)] md:text-[1.12rem]">
            {content.intro}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {content.items.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group h-full rounded-[1.4rem] bg-[var(--color-card)] p-7 transition-transform duration-500 hover:-translate-y-1 md:p-8">
                <div className="mb-8 text-[var(--color-ink)] transition-transform duration-500 group-hover:scale-105">
                  <ServiceIcon name={item.icon} />
                </div>
                <h3 className="text-[1.2rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {item.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
