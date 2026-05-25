import { icons } from '~/config/icons'
import { pages } from '~/config/pages'

import type { Project } from '@/config/profile'

interface Filter {
  name: string,
  key: string,
  icon: string,
  tags: Array<string>,
}

export enum Query {
  FILTER = 'filter',
  SELECTED = 'selected',
}

export const filters: Array<Filter> = [
  {
    name: 'ALL',
    key: '',
    icon: icons.mdiExpandAll,
    tags: [],
  },
  {
    name: 'WEB APPLICATION',
    key: 'web-application',
    icon: icons.mdiWeb,
    tags: ['web', 'application'],
  },
  {
    name: 'SOFTWARE',
    key: 'software',
    icon: icons.mdiApplication,
    tags: ['software', 'application'],
  },
  {
    name: 'KATA',
    key: 'kata',
    icon: icons.mdiCodeTags,
    tags: ['kata'],
  },
  {
    name: 'CREATIVE MEDIA',
    key: 'creative-media',
    icon: icons.mdiPencilRuler,
    tags: ['creative', 'media'],
  },
]

export function getProjectLink (key: Project['key']): string {
  return `${pages.PROJECTS.route}?${Query.SELECTED}=${key}`
}
