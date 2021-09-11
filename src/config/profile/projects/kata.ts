import { requireProgressiveImage } from '~/lib/config'
import { LinkName } from '~/lib/config/profile/projects'

import type { ProfileProjects } from '~/lib/config/profile/projects'

export const kata: ProfileProjects = [
  {
    name: 'Python Challenges',
    key: 'python-challenges',
    period: '2019 May',
    tags: [
      'Python',
      'kata',
      'data',
      'structures',
      'regular',
      `expressions`,
      'design',
      'patterns',
    ],
    description: 'Collection of various coding challenge answers - exploring python basics, data structures, regular expressions and design patterns.',
    images: [
      './assets/images/projects/python-challenges/root.png',
      './assets/images/projects/python-challenges/navigation.png',
      './assets/images/projects/python-challenges/design-pattern-directory.png',
      './assets/images/projects/python-challenges/design-pattern-challenge.png',
      './assets/images/projects/python-challenges/data-structure-directory.png',
      './assets/images/projects/python-challenges/data-structure-challenge.png',
    ].map(requireProgressiveImage),
    technologies: ['python'],
    secondaryLink: {
      text: LinkName.VIEW_SOURCE,
      icon: 'mdiGitlab',
      link: process.env.PYTHON_CHALLENGES_REPOSITORY,
    },
  },
]
