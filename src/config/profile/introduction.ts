/**
 * Separated to own module so that it may be imported from nuxt config without
 *  module aliasing
 */

const constant =
  'I am a secure software engineer with six years of full-stack development experience, currently completing my Master of Science in Software Engineering at San José State University. I specialize in application security, container hardening, and DevSecOps pipelines. Having built highly scalable cloud platforms and infrastructure automation tools like @ianbunag/dock, I leverage my background in automated testing and cloud-native architecture to build secure and resilient systems. I am currently seeking a Summer 2027 internship in Secure Software Engineering, Application Security, or DevSecOps.'

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
