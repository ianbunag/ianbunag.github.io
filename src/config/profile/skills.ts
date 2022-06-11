import { icons } from '~/config/icons'
import { technologies } from '~/config/technologies'

import type { Skill, Skills } from '@/config/profile'

type ReferencedSkill = Override<
  Skill,
  {
    icon: keyof typeof icons,
    technologies: Array<keyof typeof technologies>,
  }
>
type ReferencedSkills = Array<ReferencedSkill>

function mapReferencedSkills (referencedSkills: ReferencedSkills): Skills {
  return referencedSkills.map((referencedSkill) => {
    const mappedTechnologies = referencedSkill.technologies.map(
      referencedTechnology => technologies[referencedTechnology],
    )

    return {
      ...referencedSkill,
      icon: icons[referencedSkill.icon],
      technologies: mappedTechnologies,
    }
  })
}

export const skills = mapReferencedSkills([
  {
    name: 'Front-end development',
    description: 'I transform prototypes into responsive, scalable and performant web applications - leveraging frameworks like React, UI frameworks like Vuetify, and test frameworks like Cypress to deliver requirements ahead of time.',
    icon: 'frontEnd',
    technologies: [
      'react',
      'nuxt',
      'vue',
      'vuetify',
      'cypress',
      'typescript',
    ],
    order: 1,
  },
  {
    name: 'Back-end development',
    description: 'I bring products to life through services that are modular, robust and reliable - powered by frameworks like Fastify and covered by reliable tests through frameworks like Jest.',
    icon: 'backEnd',
    technologies: [
      'typescript',
      'go',
      'jest',
      'fastify',
      'express',
      'python',
      'php',
    ],
    order: 2,
  },
  {
    name: 'Development Operations',
    description: 'I keep the development cycle rapid, steady and organized, with a pinch of knowledge in operations - utilizing docker for development, continuous integration and delivery through CircleCI, and infrastructure orchestration through Terraform.',
    icon: 'devOps',
    technologies: [
      'terraform',
      'amazon-web-services',
      'docker',
      'github',
      'gitlab',
      'circleci',
    ],
    order: 3,
  },
])
