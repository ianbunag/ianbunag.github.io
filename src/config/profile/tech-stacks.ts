// @TODO remove this:
/* eslint-disable array-bracket-newline */
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
      //   @TODO codex
      'claude',
      'notebooklm',
    ],
  },
  {
    category: 'Technologies',
    technologies: [
    //   @TODO git
      'node-js',
      'react',
      'reactNative',
      'nextjs',
      //   @TODO kafka
      'jest',
      'cypress',
      //   @TODO phpunit
      'vue',
      'nuxt',
      'express',
    ],
  },
  {
    category: 'Databases',
    technologies: [
    // @TODO dynamodb
      'mysql',
      'postgresql',
    // @TODO redis
    // @TODO elasticsearch
    ],
  },
  {
    category: 'Cloud',
    technologies: [
    //   @TODO EC2
    //   @TODO Lambda
    //   @TODO S3
    //   @TODO SQS
    //   @TODO SNS
    //   @TODO RDS
    //   @TODO Cloudflare
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
    // @TODO Datadog
    // @TODO CloudWatch
    ],
  },
  {
    category: 'Methodologies',
    technologies: [
    //   @TODO back-end development
    //   @TODO front-end development
    //   @TODO test-driven development
    //   @TODO Kanban
    //   @TODO Agile methodologies
    ],
  },
])
