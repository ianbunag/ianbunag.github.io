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
      'php',
      'go',
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
      'reactNative',
      'react',
      'nextjs',
    ],
  },
  {
    category: 'Tooling',
    technologies: [
      'docker',
      'github',
      'circleci',
      'vitest',
      'jest',
      'cypress',
      'eslint',
      'terraform',
      'swagger',
      'kubernetes',
    ],
  },
  {
    category: 'Databases',
    technologies: ['mysql', 'postgresql'],
  },
  {
    category: 'Previous Technologies',
    technologies: [
      // Languages
      'java',
      'python',
      // Cloud Platforms
      'google-cloud',
      // Libraries / Frameworks
      'vue',
      'nuxt',
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
