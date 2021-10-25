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
    description: 'I transform prototypes into responsive, scalable and performant web applications - leveraging frameworks like Vue, UI frameworks like Vuetify, and tooling like SASS to deliver requirements ahead of time.',
    icon: 'frontEnd',
    technologies: [
      'nuxt',
      'vue',
      'vuetify',
      'bootstrap-vue',
      'typescript',
      'sass',
    ],
    order: 1,
  },
  {
    name: 'Back-end development',
    description: 'I bring products to life through services that are modular, robust and reliable - powered by frameworks like Fastify and significantly covered by solid and resilient tests through frameworks like Jest.',
    icon: 'backEnd',
    technologies: [
      'fastify',
      'express',
      'jest',
      'typescript',
      'python',
      'php',
    ],
    order: 2,
  },
  {
    name: 'Development Operations',
    description: 'I keep the development cycle rapid, steady and organized, with a pinch of knowledge in operations - utilizing docker for development, continuous integration and delivery through Gitlab, and server management with providers like Google Cloud.',
    icon: 'devOps',
    technologies: [
      'docker',
      'gitlab',
      'amazon-web-services',
      'google-cloud',
    ],
    order: 3,
  },
])
