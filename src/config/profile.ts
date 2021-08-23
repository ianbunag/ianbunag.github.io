import type { technologies } from '~/config/technologies'
import type { Skills } from '@/config/profile'

export const name = 'John Ian Buñag'

export const tag = '@yvnbunag'

export const titles = [
  'Full Stack Engineer',
  'Back-end Developer',
  'Front-end Developer',
]

export const introduction = [
  'I am a Full Stack Engineer - with a strong belief in behavior and test driven development approach, importance of code readability and workflow optimization through development tooling.',
  `With Passion, Ambition and Growth at our core, let's keep moving upward while building awesome things.`,
]

export const skills: Skills<typeof technologies> = [
  {
    name: 'Front-end development',
    description: 'I transform prototypes into responsive, scalable and performant web applications - leveraging frameworks like Vue, UI frameworks like Vuetify, and tooling like SASS to deliver requirements ahead of time.',
    icon: '$frontEnd',
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
    description: 'I bring products to life through services that are modular, robust and reliable - powered by frameworks like Fastify, with full confidence in the API because it has significant coverage with test frameworks like Jest.',
    icon: '$backEnd',
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
    description: 'I keep the development cycle rapid, steady and organized - with a pinch of knowledge with CI/CD through Gitlab, server and serverless management with providers like Google Cloud, and documentation for highly maintainable repositories.',
    icon: '$devOps',
    technologies: [
      'gitlab',
      'amazon-web-services',
      'google-cloud',
    ],
    order: 3,
  },
]
