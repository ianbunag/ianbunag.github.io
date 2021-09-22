import type { Icon } from '@/config/icons'

export interface Technology {
  display: string,
  description: string,
  icon: Icon,
  logoURL?: string,
  url?: string,
}

export type Technologies = Array<Technology>
