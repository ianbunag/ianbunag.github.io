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
    description: 'I transform prototypes into responsive, scalable and performant web applications - leveraging frontend frameworks, design systems and test frameworks to deliver requirements ahead of time.',
    icon: 'frontEnd',
    technologies: [
      'react',
      'next',
      'typescript',
      'cypress',
    ],
    order: 1,
  },
  {
    name: 'Back-end development',
    description: 'I bring products to life through services that are modular, robust and reliable - across different languages deployed to a serverless environment and covered by reliable unit and integration tests.',
    icon: 'backEnd',
    technologies: [
      'typescript',
      'jest',
      'go',
      'java',
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
      'kubernetes',
      'circleci',
    ],
    order: 3,
  },
])
