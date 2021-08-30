import { getIcon } from '~/config/icons'

import type { ConfigIcons } from '~/config/icons'
import type { TechnologyMap, Technology } from '@/config/technologies'

/**
 * Helper to preserve map keys while allowing inference during suggestion
 */
function defineTechnologyMap<Map extends TechnologyMap<ConfigIcons>> (
  map: Map,
): Map {
  return map
}

export const languages = defineTechnologyMap({
  typescript: {
    display: 'TypeScript',
    icon: 'mdiLanguageTypescript',
    url: 'https://www.typescriptlang.org',
  },
  sass: {
    display: 'Sass',
    icon: 'mdiSass',
    url: 'https://sass-lang.com',
  },
  php: {
    display: 'PHP',
    icon: 'mdiLanguagePhp',
    url: 'https://www.php.net',
  },
  python: {
    display: 'Python',
    icon: 'mdiLanguagePython',
    url: 'https://www.python.org',
  },
  'node-js': {
    display: 'Node.js',
    icon: 'mdiNodejs',
    url: 'https://nodejs.org',
  },
  css: {
    display: 'CSS',
    icon: 'mdiLanguageCss3',
  },
  java: {
    display: 'Java',
    icon: 'mdiLanguageJava',
    url: 'https://www.java.com',
  },
  html: {
    display: 'HTML',
    icon: 'mdiLanguageHtml5',
  },
  javascript: {
    display: 'JavaScript',
    icon: 'mdiLanguageJavascript',
  },
})

export const developmentTools = defineTechnologyMap({
  webpack: {
    display: 'Webpack',
    icon: 'mdiWebpack',
    url: 'https://webpack.js.org',
  },
  eslint: {
    display: 'ESLint',
    icon: 'mdiEslint',
    url: 'https://eslint.org',
  },
  stylelint: {
    display: 'Stylelint',
    icon: 'stylelint',
    url: 'https://stylelint.io',
  },
  'yvnbunag-dock': {
    display: '@yvnbunag/dock',
    icon: 'yvnbunagDock',
    url: process.env.DOCK_NPM_URL,
  },
})

export const UILibraries = defineTechnologyMap({
  vuetify: {
    display: 'Vuetify',
    icon: 'mdiVuetify',
    url: 'https://vuetifyjs.com',
  },
  'bootstrap-vue': {
    display: 'BootstrapVue',
    icon: 'bootstrapVue',
    url: 'https://bootstrap-vue.org',
  },
  bootstrap: {
    display: 'Bootstrap',
    icon: 'mdiBootstrap',
    url: 'https://getbootstrap.com',
  },
})

export const frontEndFrameworks = defineTechnologyMap({
  nuxt: {
    display: 'Nuxt',
    icon: 'mdiNuxt',
    url: 'https://nuxtjs.org',
  },
  vue: {
    display: 'Vue',
    icon: 'mdiVuejs',
    url: 'https://vuejs.org',
  },
})

export const backEndFrameworks = defineTechnologyMap({
  fastify: {
    display: 'Fastify',
    icon: 'fastify',
    url: 'https://www.fastify.io',
  },
  express: {
    display: 'Express',
    icon: 'express',
    url: 'https://expressjs.com',
  },
})

export const testFrameworks = defineTechnologyMap({
  jest: {
    display: 'Jest',
    icon: 'jest',
    url: 'https://jestjs.io',
  },
})

export const dataStores = defineTechnologyMap({
  mysql: {
    display: 'MySQL',
    icon: 'mysql',
    url: 'https://www.mysql.com',
  },
})

export const webServers = defineTechnologyMap({
  nginx: {
    display: 'NGINX',
    icon: 'nginx',
    url: 'https://www.nginx.com',
  },
  xampp: {
    display: 'XAMPP',
    icon: 'xampp',
    url: 'https://www.apachefriends.org/index.html',
  },
})

export const applications = defineTechnologyMap({
  docker: {
    display: 'Docker',
    icon: 'mdiDocker',
    url: 'https://www.docker.com',
  },
  photopea: {
    display: 'Photopea',
    icon: 'photopea',
    url: 'https://www.photopea.com',
  },
  'autodesk-maya': {
    display: 'Autodesk Maya',
    icon: 'autodeskMaya',
    url: 'https://www.autodesk.com/products/maya',
  },
  'adobe-photoshop': {
    display: 'Adobe Photoshop',
    icon: 'adobePhotoshop',
    url: 'https://www.adobe.com/products/photoshop.html',
  },
  'adobe-illustrator': {
    display: 'Adobe Illustrator',
    icon: 'adobeIllustrator',
    url: 'https://www.adobe.com/products/illustrator.html',
  },
  'adobe-premier-pro': {
    display: 'Adobe Premier Pro',
    icon: 'adobePremierPro',
    url: 'https://www.adobe.com/products/premiere.html',
  },
  'adobe-after-effects': {
    display: 'Adobe After Effects',
    icon: 'adobeAfterEffects',
    url: 'https://www.adobe.com/products/aftereffects.html',
  },
  'adobe-audition': {
    display: 'Adobe Audition',
    icon: 'adobeAudition',
    url: 'https://www.adobe.com/products/audition.html',
  },
})

export const providers = defineTechnologyMap({
  gitlab: {
    display: 'GitLab',
    icon: 'mdiGitlab',
    url: 'https://about.gitlab.com',
  },
  'amazon-web-services': {
    display: 'Amazon Web Services',
    icon: 'mdiAws',
    url: 'https://aws.amazon.com',
  },
  'google-cloud': {
    display: 'Google Cloud Services',
    icon: 'mdiGoogleCloud',
    url: 'https://cloud.google.com',
  },
  npm: {
    display: 'NPM',
    icon: 'mdiNpm',
    url: 'https://www.npmjs.com',
  },
})

export const technologies = defineTechnologyMap({
  ...languages,
  ...developmentTools,
  ...UILibraries,
  ...frontEndFrameworks,
  ...backEndFrameworks,
  ...testFrameworks,
  ...dataStores,
  ...webServers,
  ...applications,
  ...providers,
})

export type ConfigTechnologies = typeof technologies
export type ConfigTechnologyKeys = keyof ConfigTechnologies

export function getTechnology (
  key: ConfigTechnologyKeys,
): ConfigTechnologies[ConfigTechnologyKeys] {
  return technologies[key]
}

export function getMappedTechnology (
  key: ConfigTechnologyKeys,
): Technology {
  const configTechnology = getTechnology(key)

  return {
    ...configTechnology,
    icon: getIcon(configTechnology.icon),
  }
}
