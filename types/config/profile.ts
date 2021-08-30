import type { IconMap as IconMapBase } from '@/config/icons'
import type { TechnologyMap as TechnologyMapBase } from '@/config/technologies'

export interface Skill<
  IconMap extends IconMapBase = IconMapBase,
  TechnologyMap extends TechnologyMapBase = TechnologyMapBase,
> {
  name: string,
  description: string,
  icon: keyof IconMap,
  technologies: Array<keyof TechnologyMap>,
  order: number,
}

export type Skills<
  IconMap extends IconMapBase = IconMapBase,
  TechnologyMap extends TechnologyMapBase = TechnologyMapBase,
> = Array<Skill<IconMap, TechnologyMap>>

export interface ButtonLink<
  IconMap extends IconMapBase = IconMapBase,
> {
  text: string,
  icon: keyof IconMap,
  link?: string,
}

export interface Project<
  IconMap extends IconMapBase = IconMapBase,
  TechnologyMap extends TechnologyMapBase = TechnologyMapBase,
> {
  name: string,
  period: string,
  tags: Array<string>,
  description: string,
  images: Array<string>,
  technologies: Array<keyof TechnologyMap>,
  featured?: boolean,
  primaryLink?: ButtonLink<IconMap>,
  secondaryLink?: ButtonLink<IconMap>,
}

export type Projects<
  IconMap extends IconMapBase = IconMapBase,
  TechnologyMap extends TechnologyMapBase = TechnologyMapBase,
> = Array<Project<IconMap, TechnologyMap>>
