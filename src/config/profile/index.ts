import { skills } from '~/config/profile/skills'
import { projects } from '~/config/profile/projects'
import { techStacks } from '~/config/profile/tech-stacks'
import { experiences } from '~/config/profile/experiences'
import { links } from '~/config/profile/links'

export const name = 'John Ian Buñag'

export const tag = '@yvnbunag'

export const email = process.env.EMAIL_ADDRESS || ''

export const titles = [
  'Full Stack Engineer',
  'Back-end Developer',
  'Front-end Developer',
]

export const introduction = 'I am a Full Stack Engineer - with a strong belief in behavior and test driven development approach, importance of code readability and workflow optimization through development tooling.'

export {
  skills,
  projects,
  techStacks,
  experiences,
  links,
}
