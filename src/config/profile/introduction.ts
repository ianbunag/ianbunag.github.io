import moment from 'moment'

/**
 * Separated to own module so that it may be imported from nuxt config without
 *  module aliasing
 */

const constant =
  'Experienced Software Developer with hands-on expertise in crafting clean code, optimizing workflows through developer tools, and adopting a behavior and test-driven development approach to consistently deliver high-quality software using TypeScript, React, and Node.js. Proven track record through key contributions including a 2 month delivery of a full platform migration software, and test parallelization saving $10,000+.'

function dynamic (): string {
  const yearsOfExperience = moment(moment())
    .diff(new Date('2019 June'), 'years', false)
    .toFixed(0)

  return `Experienced Software Developer with over ${yearsOfExperience} years of hands-on expertise in crafting clean code, optimizing workflows through developer tools, and adopting a behavior and test-driven development approach to consistently deliver high-quality software using TypeScript, React, and Node.js. Proven track record through key contributions including a 2 month delivery of a full platform migration software, and test parallelization saving $10,000+.`
}

export const introduction = {
  constant,
  dynamic,
}
