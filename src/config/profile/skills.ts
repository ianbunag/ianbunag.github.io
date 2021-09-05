import type { ConfigIcons } from '~/config/icons'
import type { ConfigTechnologies } from '~/config/technologies'
import type { Skills } from '@/config/profile'

/**
 * @TODO Make consuming components pure by refactoring to pattern with
 *  src/config/profile/links.ts reference implementation
 */
export type ProfileSkills = Skills<ConfigIcons, ConfigTechnologies>

export const skills: ProfileSkills = [
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
    name: 'Operations',
    description: 'I keep the development cycle rapid, steady and organized - with a pinch of knowledge in docker for development, continuous integration and deployment through Gitlab, and server management with providers like Google Cloud.',
    icon: 'devOps',
    technologies: [
      'docker',
      'gitlab',
      'amazon-web-services',
      'google-cloud',
    ],
    order: 3,
  },
]
