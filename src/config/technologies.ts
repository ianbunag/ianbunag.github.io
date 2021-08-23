import { TechnologyMap } from '@/config/technologies'

/**
 * Helper to preserve map keys while allowing inference during suggestion
 */
function defineTechnologyMap<Map extends TechnologyMap> (map: Map): Map {
  return map
}

export const languages = defineTechnologyMap({
  typescript: {
    display: 'TypeScript',
    url: 'https://www.typescriptlang.org',
    icon: 'mdi-language-typescript',
  },
  sass: {
    display: 'Sass',
    url: 'https://sass-lang.com',
    icon: 'mdi-sass',
  },
  php: {
    display: 'PHP',
    url: 'https://www.php.net',
    icon: 'mdi-language-php',
  },
  python: {
    display: 'Python',
    url: 'https://www.python.org',
    icon: 'mdi-language-python',
  },
})

export const UILibraries = defineTechnologyMap({
  vuetify: {
    display: 'Vuetify',
    url: 'https://vuetifyjs.com',
    icon: 'mdi-vuetify',
  },
  'bootstrap-vue': {
    display: 'BootstrapVue',
    url: 'https://bootstrap-vue.org',
    icon: 'mdi-bootstrap',
  },
})

export const frontEndFrameworks = defineTechnologyMap({
  nuxt: {
    display: 'Nuxt',
    url: 'https://nuxtjs.org',
    icon: 'mdi-nuxt',
  },
  vue: {
    display: 'Vue',
    url: 'https://vuejs.org',
    icon: 'mdi-vuejs',
  },
})

export const backEndFrameworks = defineTechnologyMap({
  fastify: {
    display: 'Fastify',
    url: 'https://www.fastify.io',
    icon: '$fastify',
  },
  express: {
    display: 'Express',
    url: 'https://expressjs.com',
    icon: '$express',
  },
})

export const testFrameworks = defineTechnologyMap({
  jest: {
    display: 'Jest',
    url: 'https://jestjs.io',
    icon: '$jest',
  },
})

export const providers = defineTechnologyMap({
  gitlab: {
    display: 'GitLab',
    url: 'https://about.gitlab.com',
    icon: 'mdi-gitlab',
  },
  'amazon-web-services': {
    display: 'Amazon Web Services',
    url: 'https://aws.amazon.com',
    icon: 'mdi-aws',
  },
  'google-cloud': {
    display: 'Google Cloud Services',
    url: 'https://cloud.google.com',
    icon: 'mdi-google-cloud',
  },
})

export const technologies = defineTechnologyMap({
  ...languages,
  ...UILibraries,
  ...frontEndFrameworks,
  ...backEndFrameworks,
  ...testFrameworks,
  ...providers,
})
