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
    name: 'Front-End development',
    description: 'I convert design prototypes into responsive and accessible web applications. I utilize modern frameworks and design systems to seamlessly bridge technical execution with creative visual design.',
    icon: 'frontEnd',
    technologies: [
      'github-copilot',
      'react',
      'typescript',
      'javascript',
    ],
    order: 1,
  },
  {
    name: 'Back-End Development',
    description: 'I engineer scalable, secure, and modular backend services. I build robust systems across managed and serverless environments with comprehensive test coverage.',
    icon: 'backEnd',
    technologies: [
      'github-copilot',
      'typescript',
      'javascript',
      'php',
      'go',
      'java',
      'mysql',
      'postgresql',
    ],
    order: 2,
  },
  {
    name: 'DevOps & Infrastructure',
    description: 'I accelerate development cycles through automated CI/CD pipelines via CircleCI. I leverage Docker for containerization and provision reliable, scalable infrastructure using Terraform.',
    icon: 'devOps',
    technologies: [
      'github-copilot',
      'docker',
      'circleci',
      'google-cloud',
      'amazon-web-services',
      'terraform',
      'kubernetes',
    ],
    order: 3,
  },
])
