import { technologies } from '~/config/technologies'

import type { TechStack, TechStacks } from '@/config/profile'

type ReferencedTechStack = Override<
  TechStack,
  { technologies: Array<keyof typeof technologies> }
>
type ReferencedTechStacks = Array<ReferencedTechStack>

function mapReferencedTechStacks (
  referencedTechStacks: ReferencedTechStacks,
): TechStacks {
  return referencedTechStacks.map((referencedTechStack) => {
    const mappedTechnologies = referencedTechStack.technologies.map(
      referencedTechnology => technologies[referencedTechnology],
    )

    return {
      ...referencedTechStack,
      technologies: mappedTechnologies,
    }
  })
}

export const techStacks = mapReferencedTechStacks([
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
])
