import { introduction } from '~/config/profile/introduction'
import { skills } from '~/config/profile/skills'
import { projects } from '~/config/profile/projects'
import { techStacks } from '~/config/profile/tech-stacks'
import { experiences } from '~/config/profile/experiences'
import { links } from '~/config/profile/links'

export const name = 'John Ian Buñag'

export const tag = '@yvnbunag'

export const email = process.env.EMAIL_ADDRESS || ''

export const titles = [
  'Software Developer',
  'Full Stack Engineer',
  'Backend Developer',
  'Frontend Developer',
]

export {
  introduction,
  skills,
  projects,
  techStacks,
  experiences,
  links,
}
