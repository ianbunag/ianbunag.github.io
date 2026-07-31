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
      'javascript',
      'java',
      'go',
      'php',
      'python',
      'markdown',
      'html',
      'css',
    ],
  },
  {
    category: 'AI Tools',
    technologies: [
      'gemini',
      'codex',
      'claude',
      'notebooklm',
    ],
  },
  {
    category: 'Technologies',
    technologies: [
      'git',
      'node-js',
      'react',
      'reactNative',
      'nextjs',
      'kafka',
      'jest',
      'cypress',
      'phpunit',
      'vue',
      'nuxt',
      'express',
    ],
  },
  {
    category: 'Databases',
    technologies: [
      'dynamodb',
      'mysql',
      'postgresql',
      'redis',
      'elasticsearch',
    ],
  },
  {
    category: 'Cloud',
    technologies: [
      'ec2',
      'lambda',
      's3',
      'sqs',
      'sns',
      'rds',
      'cloudflare',
    ],
  },
  {
    category: 'DevOps',
    technologies: [
      'docker',
      'terraform',
      'circleci',
      'github',
      'gitlab',
      'datadog',
      'cloudwatch',
    ],
  },
  {
    category: 'Methodologies',
    technologies: [
      'back-end-development',
      'front-end-development',
      'test-driven-development',
      'kanban',
      'agile',
    ],
  },
])
