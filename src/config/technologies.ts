import { createAccessibleLink } from '~/config/module'
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
    description: 'JavaScript superset with static types',
    icon: 'mdiLanguageTypescript',
    logoURL: 'logos/typescript.svg',
    url: 'https://www.typescriptlang.org',
  },
  sass: {
    display: 'Sass',
    description: 'Style sheet language compiled to CSS',
    icon: 'mdiSass',
    logoURL: 'logos/sass.svg',
    url: 'https://sass-lang.com',
  },
  php: {
    display: 'PHP',
    description: 'Server-side web programming language',
    icon: 'mdiLanguagePhp',
    logoURL: 'logos/php.svg',
    url: 'https://www.php.net',
  },
  python: {
    display: 'Python',
    description: 'Developer-first programming language',
    icon: 'mdiLanguagePython',
    logoURL: 'logos/python.svg',
    url: 'https://www.python.org',
  },
  'node-js': {
    display: 'Node.js',
    description: 'JavaScript runtime environment',
    icon: 'mdiNodejs',
    logoURL: 'logos/node-js.svg',
    url: 'https://nodejs.org',
  },
  css: {
    display: 'CSS',
    description: 'Style sheet language for HTML',
    icon: 'mdiLanguageCss3',
    logoURL: 'logos/css.svg',
  },
  java: {
    display: 'Java',
    description: '',
    icon: 'mdiLanguageJava',
    url: 'https://www.java.com',
  },
  html: {
    display: 'HTML',
    description: 'Standard markup language of the web',
    icon: 'mdiLanguageHtml5',
    logoURL: 'logos/html.svg',
  },
  javascript: {
    display: 'JavaScript',
    description: 'Client-side web programming language',
    icon: 'mdiLanguageJavascript',
    logoURL: 'logos/javascript.svg',
  },
  markdown: {
    display: 'Markdown',
    description: 'Lightweight markup language',
    icon: 'mdiLanguageMarkdownOutline',
    logoURL: 'logos/markdown.svg',
  },
})

export const developmentTools = defineTechnologyMap({
  webpack: {
    display: 'Webpack',
    description: '',
    icon: 'mdiWebpack',
    url: 'https://webpack.js.org',
  },
  eslint: {
    display: 'ESLint',
    description: 'JavaScript code analysis tool',
    icon: 'mdiEslint',
    logoURL: 'logos/eslint.svg',
    url: 'https://eslint.org',
  },
  stylelint: {
    display: 'Stylelint',
    description: 'Style sheets analysis tool',
    icon: 'stylelint',
    logoURL: 'logos/stylelint.svg',
    url: 'https://stylelint.io',
  },
  'yvnbunag-dock': {
    display: '@yvnbunag/dock',
    description: '',
    icon: 'yvnbunagDock',
    url: process.env.DOCK_NPM_URL,
  },
  swagger: {
    display: 'Swagger',
    description: 'OpenAPI design and documentation tool',
    icon: 'swagger',
    logoURL: 'logos/swagger.svg',
    url: 'https://swagger.io',
  },
})

export const UIlibraries = defineTechnologyMap({
  vuetify: {
    display: 'Vuetify',
    description: 'Material design framework for Vue',
    icon: 'mdiVuetify',
    logoURL: 'logos/vuetify.svg',
    url: 'https://vuetifyjs.com',
  },
  'bootstrap-vue': {
    display: 'BootstrapVue',
    description: 'Bootstrap v4 framework for Vue',
    icon: 'bootstrapVue',
    logoURL: 'logos/bootstrap-vue.svg',
    url: 'https://bootstrap-vue.org',
  },
  bootstrap: {
    display: 'Bootstrap',
    description: '',
    icon: 'mdiBootstrap',
    url: 'https://getbootstrap.com',
  },
})

export const frontEndFrameworks = defineTechnologyMap({
  nuxt: {
    display: 'Nuxt',
    description: 'Vue universal applications framework',
    icon: 'mdiNuxt',
    logoURL: 'logos/nuxt.svg',
    url: 'https://nuxtjs.org',
  },
  vue: {
    display: 'Vue',
    description: 'Progressive JavaScript framework',
    icon: 'mdiVuejs',
    logoURL: 'logos/vue.svg',
    url: 'https://vuejs.org',
  },
})

export const backEndFrameworks = defineTechnologyMap({
  fastify: {
    display: 'Fastify',
    description: 'Fast and low overhead web framework',
    icon: 'fastify',
    logoURL: 'logos/fastify.svg',
    url: 'https://www.fastify.io',
  },
  express: {
    display: 'Express',
    description: 'Standard server framework for Node.js',
    icon: 'express',
    logoURL: 'logos/express.svg',
    url: 'https://expressjs.com',
  },
  lumen: {
    display: 'Lumen',
    description: 'Fast micro-framework by Laravel',
    icon: 'lumen',
    logoURL: 'logos/lumen.svg',
    url: 'https://lumen.laravel.com',
  },
  'aws-chalice': {
    display: 'AWS Chalice',
    description: 'Serverless applications framework',
    icon: 'awsChalice',
    logoURL: 'logos/aws-chalice.svg',
    url: 'https://aws.github.io/chalice',
  },
})

export const testFrameworks = defineTechnologyMap({
  jest: {
    display: 'Jest',
    description: 'Simple JavaScript testing framework',
    icon: 'jest',
    logoURL: 'logos/jest.svg',
    url: 'https://jestjs.io',
  },
})

export const databases = defineTechnologyMap({
  mysql: {
    display: 'MySQL',
    description: 'Open-source relational database',
    icon: 'mysql',
    logoURL: 'logos/mysql.svg',
    url: 'https://www.mysql.com',
  },
})

export const serverManagement = defineTechnologyMap({
  nginx: {
    display: 'NGINX',
    description: 'HTTP server and reverse proxy',
    icon: 'nginx',
    logoURL: 'logos/nginx.svg',
    url: 'https://www.nginx.com',
  },
  xampp: {
    display: 'XAMPP',
    description: '',
    icon: 'xampp',
    url: 'https://www.apachefriends.org/index.html',
  },
  pm2: {
    display: 'PM2',
    description: 'Process manager for Node.js',
    icon: 'pm2',
    logoURL: 'logos/pm2.png',
    url: 'https://pm2.keymetrics.io',
  },
})

export const applications = defineTechnologyMap({
  docker: {
    display: 'Docker',
    description: 'Container management toolkit',
    icon: 'mdiDocker',
    logoURL: 'logos/docker.svg',
    url: 'https://www.docker.com',
  },
  photopea: {
    display: 'Photopea',
    description: '',
    icon: 'photopea',
    url: 'https://www.photopea.com',
  },
  'autodesk-maya': {
    display: 'Autodesk Maya',
    description: '',
    icon: 'autodeskMaya',
    url: 'https://www.autodesk.com/products/maya',
  },
  'adobe-photoshop': {
    display: 'Adobe Photoshop',
    description: '',
    icon: 'adobePhotoshop',
    url: 'https://www.adobe.com/products/photoshop.html',
  },
  'adobe-illustrator': {
    display: 'Adobe Illustrator',
    description: '',
    icon: 'adobeIllustrator',
    url: 'https://www.adobe.com/products/illustrator.html',
  },
  'adobe-premier-pro': {
    display: 'Adobe Premier Pro',
    description: '',
    icon: 'adobePremierPro',
    url: 'https://www.adobe.com/products/premiere.html',
  },
  'adobe-after-effects': {
    display: 'Adobe After Effects',
    description: '',
    icon: 'adobeAfterEffects',
    url: 'https://www.adobe.com/products/aftereffects.html',
  },
  'adobe-audition': {
    display: 'Adobe Audition',
    description: '',
    icon: 'adobeAudition',
    url: 'https://www.adobe.com/products/audition.html',
  },
})

export const providers = defineTechnologyMap({
  gitlab: {
    display: 'GitLab',
    description: 'Single tool for the DevOps lifecycle',
    icon: 'mdiGitlab',
    logoURL: 'logos/gitlab.svg',
    url: 'https://gitlab.com',
  },
  'amazon-web-services': {
    display: 'Amazon Web Services',
    description: 'Cloud computing platform by Amazon',
    icon: 'mdiAws',
    logoURL: 'logos/aws.svg',
    url: 'https://aws.amazon.com',
  },
  'google-cloud': {
    display: 'Google Cloud Platform',
    description: 'Cloud computing platform by Google',
    icon: 'mdiGoogleCloud',
    logoURL: 'logos/google-cloud.svg',
    url: 'https://cloud.google.com',
  },
  npm: {
    display: 'NPM',
    description: '',
    icon: 'mdiNpm',
    url: 'https://www.npmjs.com',
  },
})

export const technologies = defineTechnologyMap({
  ...languages,
  ...developmentTools,
  ...UIlibraries,
  ...frontEndFrameworks,
  ...backEndFrameworks,
  ...testFrameworks,
  ...databases,
  ...serverManagement,
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

export function createTechnologyLink (key: ConfigTechnologyKeys): string {
  const { display, url = '' } = getTechnology(key) as Technology

  return createAccessibleLink(display, url)
}
