/**
 * Separated to own module so that it may be imported from nuxt config without
 *  module aliasing
 */

const constant =
  'I am a software developer with six years of experience building scalable applications. I am currently pursuing a Master of Science in Software Engineering at San José State University to specialize in secure software development. I aim to write secure code and build robust pipelines to protect high-volume transaction systems. I am seeking a software engineering internship where I can contribute my extensive full-stack background while deepening my foundational cybersecurity knowledge.'

function dynamic (): string {
  // const yearsOfExperience = moment()
  //   .diff(moment('June 01, 2019'), 'years', false)
  //   .toFixed(0)

  return constant
}

export const introduction = {
  constant,
  dynamic,
}
