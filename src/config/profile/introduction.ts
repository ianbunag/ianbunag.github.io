/**
 * Separated to own module so that it may be imported from nuxt config without
 *  module aliasing
 */

const constant =
  'I am a software developer with six years of experience building scalable applications, currently pursuing a Master of Science in Software Engineering at San José State University. My focus is on embedding security throughout the software lifecycle, specializing in application security, container hardening, and DevSecOps pipelines for high-volume transaction systems. I am seeking Security Engineer, Application Security Engineer, DevSecOps Engineer, Cloud Security Engineer, or Secure Software Engineer internship roles where I can leverage my full-stack background to protect enterprise cloud infrastructure.'

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
