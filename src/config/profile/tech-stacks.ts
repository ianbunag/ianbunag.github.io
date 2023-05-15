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
      'go',
      'java',
      'markdown',
      'html',
      'css',
    ],
  },
  {
    category: 'Cloud Platforms',
    technologies: ['amazon-web-services'],
  },
  {
    category: 'Libraries / Frameworks',
    technologies: [
      'react',
      'vue',
      'nuxt',
    ],
  },
  {
    category: 'Tooling',
    technologies: [
      'terraform',
      'github',
      'circleci',
      'jest',
      'cypress',
      'eslint',
      'swagger',
      'kubernetes',
      'docker',
    ],
  },
  {
    category: 'Databases',
    technologies: ['mysql'],
  },
  {
    category: 'Previous Technologies',
    technologies: [
      // Languages
      'python',
      'php',
      // Cloud Platforms
      'google-cloud',
      // Libraries / Frameworks
      'fastify',
      'aws-chalice',
      'express',
      'lumen',
      // UI Libraries / Design Systems
      'vuetify',
      'bootstrap-vue',
      // Tooling
      'gitlab',
      'nginx',
      'pm2',
      'sass',
      'stylelint',
    ],
  },
])
