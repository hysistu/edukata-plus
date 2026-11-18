import { Figtree, Manrope } from 'next/font/google'
import React from 'react'

import './styles.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata = {
  description:
    'Familienbegleitung, Jugendcoaching und Besuchsbegleitung in Zürich und Umgebung – edukataplus.',
  title: 'edukataplus · Familienbegleitung Zürich',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html className={`${manrope.variable} ${figtree.variable}`} lang="de">
      <body
        style={
          {
            '--font-display': 'var(--font-manrope)',
            '--font-body': 'var(--font-figtree)',
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  )
}
