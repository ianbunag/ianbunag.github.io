import { createAccessibleLink } from '~/lib/config'
import { icons } from '~/config/icons'

import type { Technology } from '@/config/technologies'

type ReferencedTechnology = Override<Technology, { icon: keyof typeof icons}>
type ReferencedTechnologyMap = Record<string, ReferencedTechnology>

function mapTechnology <Map extends ReferencedTechnologyMap> (
  map: Map,
) {
  const mapEntries = Object.entries(map)
  const mappedEntries: Array<[keyof Map, Technology]> = mapEntries
    .map(([key, { icon, ...technology }]) => {
      return [key, { ...technology, icon: icons[icon] }]
    })

  return Object.fromEntries(mappedEntries) as Record<keyof Map, Technology>
}

export const languages = mapTechnology({
  go: {
    display: 'Go',
    description: 'Expressive, concise and efficient language',
    icon: 'mdiLanguageGo',
    logoURL: 'logos/go.svg',
    url: 'https://go.dev/',
  },
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
    description: 'Object oriented programming language',
    icon: 'mdiLanguageJava',
    logoURL: 'logos/java.svg',
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

export const developmentTools = mapTechnology({
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

export const UIlibraries = mapTechnology({
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

export const frontEndFrameworks = mapTechnology({
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
  react: {
    display: 'React',
    description: 'Library for building user interfaces',
    icon: 'mdiReact',
    logoURL: 'logos/react.svg',
    url: 'https://reactjs.org/',
  },
})

export const backEndFrameworks = mapTechnology({
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

export const testFrameworks = mapTechnology({
  jest: {
    display: 'Jest',
    description: 'Simple JavaScript testing framework',
    icon: 'jest',
    logoURL: 'logos/jest.svg',
    url: 'https://jestjs.io',
  },
  cypress: {
    display: 'Cypress',
    description: 'Browser testing framework',
    icon: 'cypress',
    logoURL: 'logos/cypress.svg',
    url: 'https://www.cypress.io/',
  },
})

export const databases = mapTechnology({
  mysql: {
    display: 'MySQL',
    description: 'Open-source relational database',
    icon: 'mysql',
    logoURL: 'logos/mysql.svg',
    url: 'https://www.mysql.com',
  },
})

export const serverManagement = mapTechnology({
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

export const applications = mapTechnology({
  'vs-code': {
    display: 'Visual Studio Code',
    description: 'Code editor by Microsoft',
    icon: 'mdiMicrosoftVisualStudioCode',
    logoURL: 'logos/vs-code.svg',
    url: 'https://code.visualstudio.com/',
  },
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

export const providers = mapTechnology({
  terraform: {
    display: 'Terraform',
    description: 'Infrastructure as code tool',
    icon: 'mdiTerraform',
    logoURL: 'logos/terraform.svg',
    url: 'https://www.terraform.io/',
  },
  github: {
    display: 'GitHub',
    description: 'Source code management platform',
    icon: 'mdiGithub',
    logoURL: 'logos/github.svg',
    url: 'https://github.com/',
  },
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
  circleci: {
    display: 'CircleCI',
    description: 'Continuous integration platform',
    icon: 'circleCI',
    logoURL: 'logos/circle-ci.svg',
    url: 'https://circleci.com/',
  },
  npm: {
    display: 'NPM',
    description: '',
    icon: 'mdiNpm',
    url: 'https://www.npmjs.com',
  },
})

export const technologies = {
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
}

export function createTechnologyLink (
  technologyKey: keyof typeof technologies,
): string {
  const { display, url = '' } = technologies[technologyKey]

  return createAccessibleLink(display, url)
}
