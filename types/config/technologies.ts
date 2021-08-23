import type { IconReference } from '@/config'

export interface Technology {
  display: string,
  url: string,
  icon: IconReference,
}

export type TechnologyMap = Record<string, Technology>
