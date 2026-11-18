type MediaLike =
  | {
      url?: string | null
      alt?: string | null
      sizes?: Record<string, { url?: string | null } | undefined> | null
    }
  | number
  | null
  | undefined

export function getMediaUrl(media: MediaLike, size?: string): string | null {
  if (!media || typeof media === 'number') return null
  if (size && media.sizes?.[size]?.url) return media.sizes[size]?.url || null
  return media.url || null
}

export function getMediaAlt(media: MediaLike, fallback = ''): string {
  if (!media || typeof media === 'number') return fallback
  return media.alt || fallback
}
