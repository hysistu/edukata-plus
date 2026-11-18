import { cn } from '@/lib/cn'

type IconProps = {
  className?: string
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      className={cn('h-7 w-7', className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  )
}

export function PersonIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      className={cn('h-7 w-7', className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 19.5c1.4-3.2 3.6-4.8 6.5-4.8s5.1 1.6 6.5 4.8" />
    </svg>
  )
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      className={cn('h-7 w-7', className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="8" r="2.75" />
      <path d="M3.5 19c1.1-2.6 2.9-3.9 5.5-3.9s4.4 1.3 5.5 3.9" />
      <circle cx="16.5" cy="9" r="2.25" />
      <path d="M14 19c.7-1.8 1.9-2.8 3.8-2.8 1.5 0 2.6.7 3.4 1.8" />
    </svg>
  )
}

export function ServiceIcon({
  name,
  className,
}: {
  name: 'home' | 'person' | 'people'
  className?: string
}) {
  if (name === 'person') return <PersonIcon className={className} />
  if (name === 'people') return <PeopleIcon className={className} />
  return <HomeIcon className={className} />
}
