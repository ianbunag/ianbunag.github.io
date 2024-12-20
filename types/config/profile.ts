import type { Moment } from 'moment'
import type { Icon } from '@/config/icons'
import type { Technologies } from '@/config/technologies'
import type { Association } from '@/config/associations'

export interface Skill {
  name: string,
  description: string,
  icon: Icon,
  technologies: Technologies,
  order: number,
}

export type Skills = Array<Skill>

export interface ProjectLink {
  text: string,
  link?: string,
  linkIcon: Icon,
}

export interface Project {
  name: string,
  key: string,
  period: Moment | 'Present',
  tags: Array<string>,
  description: string,
  images: Array<string>,
  technologies: Technologies,
  featured?: boolean,
  primaryLink?: ProjectLink,
  secondaryLink?: ProjectLink,
}

export type Projects = Array<Project>

export interface TechStack {
  category: string,
  technologies: Technologies,
}

export type TechStacks = Array<TechStack>

export enum ExperienceType {
  FULL_TIME_JOB,
  INTERNSHIP,
  STUDIES,
}

export interface Experience {
  role: string,
  type: ExperienceType,
  association: Association,
  intermediary?: Association,
  period: {
    start: Moment,
    end?: Moment,
  },
  description: string,
}

export type Experiences = Array<Experience>

export interface Link {
  name: string,
  icon: Icon,
  url: string,
}

export type Links = Array<Link>
