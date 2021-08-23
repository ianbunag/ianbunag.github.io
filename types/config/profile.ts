import type { IconReference } from '@/config'
import type { TechnologyMap as TechnologyMapBase } from '@/config/technologies'

export interface Skill<
  TechnologyMap extends TechnologyMapBase = TechnologyMapBase,
> {
  name: string,
  description: string,
  icon: IconReference,
  technologies: Array<keyof TechnologyMap>,
  order: number,
}

export type Skills<
  TechnologyMap extends TechnologyMapBase = TechnologyMapBase,
> = Array<Skill<TechnologyMap>>
