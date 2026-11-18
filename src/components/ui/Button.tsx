import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

type SharedProps = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants = {
  primary: 'btn-primary border border-transparent',
  secondary: 'btn-secondary',
  ghost: 'bg-transparent text-[var(--color-ink)] border border-transparent',
}

export function Button(props: ButtonProps) {
  const { children, className, variant = 'primary', ...rest } = props
  const classes = cn(
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-[0.95rem] font-medium tracking-[-0.01em] transition duration-300 hover:-translate-y-px active:scale-[0.98]',
    variants[variant],
    className,
  )

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = rest as Omit<
      ButtonAsLink,
      'children' | 'className' | 'variant'
    >
    const isHash = href.startsWith('#')

    if (isHash) {
      return (
        <a className={classes} href={href} {...anchorProps}>
          {children}
        </a>
      )
    }

    return (
      <Link className={classes} href={href} {...anchorProps}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      type="button"
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
