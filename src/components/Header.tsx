'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const links = [
  { href: '#angebot', label: 'Angebot' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#ueber-mich', label: 'Über mich' },
]

type HeaderProps = {
  brand: string
}

export function Header({ brand }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const brandMain = brand.replace(/plus$/i, '')
  const brandPlus = brand.toLowerCase().endsWith('plus') ? 'plus' : ''

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300',
        scrolled
          ? 'border-b border-[var(--color-ink)]/6 bg-[var(--color-sage)]/90 shadow-[0_8px_30px_rgba(36,58,52,0.06)] backdrop-blur-md'
          : 'bg-[var(--color-sage)]/70 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a className="font-display text-[1.35rem] tracking-[-0.04em]" href="#top">
          <span className="text-[var(--color-ink)]">{brandMain}</span>
          {brandPlus ? <span className="text-[var(--color-gold)]">{brandPlus}</span> : null}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              className="text-[0.95rem] text-[var(--color-ink)]/80 transition-colors hover:text-[var(--color-ink)]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
          <Button className="px-5 py-2.5 text-sm" href="#kontakt">
            Kontakt
          </Button>
        </nav>

        <button
          aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-ink)]/10 bg-white/50 text-[var(--color-ink)] md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, height: 'auto' }}
            className="border-t border-[var(--color-ink)]/8 bg-[var(--color-sage)] md:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-2 px-5 py-5">
              {links.map((link) => (
                <a
                  className="rounded-2xl px-4 py-3 text-lg text-[var(--color-ink)]"
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-2 w-full" href="#kontakt" onClick={() => setOpen(false)}>
                Kontakt
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
