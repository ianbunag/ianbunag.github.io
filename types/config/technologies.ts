import type { IconMap as IconMapBase } from '@/config/icons'

export interface Technology<IconMap extends IconMapBase = IconMapBase> {
  display: string,
  icon: keyof IconMap,
  url?: string,
}

export type TechnologyMap<
  IconMap extends IconMapBase = IconMapBase,
> = Record<string, Technology<IconMap>>
