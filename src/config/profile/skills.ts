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
    description: 'I convert design prototypes into responsive, scalable, and high-performance web applications. I use frontend frameworks, design systems, and testing tools to deliver ahead of schedule.',
    icon: 'frontEnd',
    technologies: [
      'react',
      'typescript',
      'javascript',
    ],
    order: 1,
  },
  {
    name: 'Back-end development',
    description: 'I engineer products with modular, robust, and dependable services. I work across various languages in managed and serverless environments, backed by comprehensive unit and integration tests.',
    icon: 'backEnd',
    technologies: [
      'typescript',
      'javascript',
      'php',
      'go',
      'mysql',
    ],
    order: 2,
  },
  {
    name: 'Development Operations',
    description: 'I maintain a rapid, steady, and organized development cycle with a blend of operational knowledge. I leverage Docker for development, ensure continuous integration and delivery via CircleCI, and orchestrate infrastructure using Terraform.',
    icon: 'devOps',
    technologies: [
      'docker',
      'kubernetes',
      'amazon-web-services',
      'circleci',
      'terraform',
    ],
    order: 3,
  },
])
