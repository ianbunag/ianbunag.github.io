function normalizeHost (host: string): string {
  const trimmedHost = host.trim()

  if (trimmedHost === 'localhost') { return 'http://127.0.0.1' }

  return trimmedHost
}

function normalizeName (name: string): string {
  return name.replace(/[/:]+/g, '-')
}

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
    const { HOST: host = '', PORT: port } = process.env
    const hostSuffix = port ? `:${port}` : ''
    const hostname = `${normalizeHost(host)}${hostSuffix}`
    const robots = (() => {
      const base = process.env.BASE || '/'
      const baseHostname = `${hostname}${base}`

      return {
        Allow: '/',
        Host: baseHostname,
        Sitemap: `${baseHostname}sitemap.xml`,
      }
    })()
    const sitemaps = (() => {
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
