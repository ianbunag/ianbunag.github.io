import {
  normalizeHost,
  normalizeName,
  extractHostname,
  extractBaseHostname,
} from './module'

function createSitemap (host: string, name?: string) {
  return {
    hostname: host,
    trailingSlash: true,
    ...(name ? { path: `${name}.sitemap.xml` } : {}),
  }
}

// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
export const buildModules = [
  '@nuxt/typescript-build', // https://go.nuxtjs.dev/typescript
  '@nuxtjs/composition-api/module',
  '@nuxtjs/style-resources',
  '@nuxtjs/stylelint-module', // https://go.nuxtjs.dev/stylelint
  '@nuxtjs/vuetify', // https://go.nuxtjs.dev/vuetify
  ...(() => {
    const robots = (() => {
      const baseHostname = extractBaseHostname(process.env)

      return {
        Allow: '/',
        Host: baseHostname,
        Sitemap: `${baseHostname}sitemap.xml`,
      }
    })()
    const sitemaps = (() => {
      const hostname = extractHostname(process.env)
      const extraHosts = (process.env.EXTRA_HOSTS || '')
        .split(',')
        .filter(Boolean)
        .map(normalizeHost)
        .map(extraHost => [extraHost, normalizeName(extraHost)])
        .map(([extraHost, name]) => createSitemap(extraHost, name))

      return [createSitemap(hostname), ...extraHosts]
    })()

    return [
      ['@nuxtjs/robots', robots],
      ['@nuxtjs/sitemap', sitemaps],
    ]
  })(),
]
