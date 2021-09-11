import type { IconMap as IconMapBase, Icon } from '@/config/icons'
import type { TechnologyMap as TechnologyMapBase } from '@/config/technologies'
import type { AssociationMap as AssociationMapBase } from '@/config/associations'

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
  key: string,
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

export interface TechStack<
  TechnologyMap extends TechnologyMapBase = TechnologyMapBase,
> {
  category: string,
  technologies: Array<keyof TechnologyMap>,
}

export type TechStacks<
  TechnologyMap extends TechnologyMapBase = TechnologyMapBase,
> = Array<TechStack<TechnologyMap>>

export interface Experience<
  Type = string,
  AssociationMap extends AssociationMapBase = AssociationMapBase,
> {
  role: string,
  type: Type,
  association: keyof AssociationMap,
  period: {
    start: string,
    end?: string,
  },
  description: string,
}

export type Experiences<
  Type = string,
  AssociationMap extends AssociationMapBase = AssociationMapBase,
> = Array<Experience<Type, AssociationMap>>

export interface Link {
  name: string,
  icon: Icon,
  url: string,
}

export type Links = Array<Link>
