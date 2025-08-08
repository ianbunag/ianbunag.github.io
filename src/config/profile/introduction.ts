import moment from 'moment'

/**
 * Separated to own module so that it may be imported from nuxt config without
 *  module aliasing
 */

const constant =
  'With over 6 years of experience, I build robust and scalable applications by applying advanced methodologies like Agent-Driven Development and TDD. My work has accelerated time-to-market by 30% and reduced manual effort by 80%, showcasing a commitment to delivering high-impact, innovative solutions.'

function dynamic (): string {
  const yearsOfExperience = moment()
    .diff(moment('June 01, 2019'), 'years', false)
    .toFixed(0)

  return `With over ${yearsOfExperience} years of experience, I build robust and scalable applications by applying advanced methodologies like Agent-Driven Development and TDD. My work has accelerated time-to-market by 30% and reduced manual effort by 80%, showcasing a commitment to delivering high-impact, innovative solutions.`
}

export const introduction = {
  constant,
  dynamic,
}
