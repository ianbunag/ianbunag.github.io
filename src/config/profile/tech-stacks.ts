import type { ConfigTechnologies } from '~/config/technologies'
import type { TechStack, TechStacks } from '@/config/profile'

/**
 * @TODO Make consuming components pure by refactoring to pattern with
 *  src/config/profile/links.ts reference implementation
 */
export type ProfileTechStack = TechStack<ConfigTechnologies>
export type ProfileTechStacks = TechStacks<ConfigTechnologies>

export const techStacks: ProfileTechStacks = [
  {
    category: 'Languages',
    technologies: [
      'typescript',
      'node-js',
      'javascript',
      'python',
      'php',
      'markdown',
      'html',
      'css',
    ],
  },
  {
    category: 'Frameworks',
    technologies: [
      'nuxt',
      'vue',
      'fastify',
      'aws-chalice',
      'lumen',
      'express',
    ],
  },
  {
    category: 'UI Libraries',
    technologies: [
      'vuetify',
      'bootstrap-vue',
    ],
  },
  {
    category: 'Tooling',
    technologies: [
      'gitlab',
      'jest',
      'swagger',
      'sass',
      'eslint',
      'stylelint',
      'docker',
    ],
  },
  {
    category: 'Databases',
    technologies: ['mysql'],
  },
  {
    category: 'Server Management',
    technologies: [
      'nginx',
      'pm2',
    ],
  },
  {
    category: 'Cloud Platforms',
    technologies: [
      'amazon-web-services',
      'google-cloud',
    ],
  },
]
