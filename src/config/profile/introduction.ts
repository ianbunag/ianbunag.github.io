import moment from 'moment'

/**
 * Separated to own module so that it may be imported from nuxt config without
 *  module aliasing
 */

const constant =
  'Software Engineer with over 7 years of experience building robust, scalable, and secure applications by applying advanced methodologies like Agent-Driven Development and TDD. My work has accelerated time-to-market by 30% and reduced manual effort by 80%, showcasing a commitment to delivering high-impact, innovative solutions. I am currently pursuing a Master\'s degree in Software Engineering with a specialization in Cybersecurity.'

function dynamic (): string {
  const yearsOfExperience = moment()
    .diff(moment('June 01, 2019'), 'years', false)
    .toFixed(0)

  return `Software Engineer with over ${yearsOfExperience} years of experience building robust, scalable, and secure applications by applying advanced methodologies like Agent-Driven Development and TDD. My work has accelerated time-to-market by 30% and reduced manual effort by 80%, showcasing a commitment to delivering high-impact, innovative solutions. I am currently pursuing a Master's degree in Software Engineering with a specialization in Cybersecurity.`
}

export const introduction = {
  constant,
  dynamic,
}
