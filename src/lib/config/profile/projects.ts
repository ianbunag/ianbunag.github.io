import { icons } from '~/config/icons'
import { technologies } from '~/config/technologies'

import type { ProjectLink, Project, Projects } from '@/config/profile'

type ReferencedProjectLink = Override<
  ProjectLink,
  { linkIcon: keyof typeof icons }
>

export type ReferencedProject = Override<
  Project,
  {
    technologies: Array<keyof typeof technologies>,
    primaryLink?: ReferencedProjectLink,
    secondaryLink?: ReferencedProjectLink,
  }
>
export type ReferencedProjects = Array<ReferencedProject>
export enum LinkName {
  VIEW_SOURCE= 'View source',
  TRY_ME = 'Try me!',
  WATCH_ME = 'Watch me!',
}

function mapReferencedProjectLink (
  referencedProjectLink: ReferencedProjectLink,
): ProjectLink {
  const { linkIcon, ...projectLink } = referencedProjectLink

  return {
    ...projectLink,
    linkIcon: icons[linkIcon],
  }
}

export function mapReferencedProjects (
  referencedProjects: ReferencedProjects,
): Projects {
  return referencedProjects.map((referencedProject) => {
    const mappedTechnologies = referencedProject.technologies.map(
      referencedTechnology => technologies[referencedTechnology],
    )

    const primaryLink = referencedProject.primaryLink
      ? mapReferencedProjectLink(referencedProject.primaryLink)
      : undefined
    const secondaryLink = referencedProject.secondaryLink
      ? mapReferencedProjectLink(referencedProject.secondaryLink)
      : undefined

    return {
      ...referencedProject,
      technologies: mappedTechnologies,
      primaryLink,
      secondaryLink,
    }
  })
}
