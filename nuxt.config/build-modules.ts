// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
export const buildModules = [
  '@nuxt/typescript-build', // https://go.nuxtjs.dev/typescript
  '@nuxtjs/composition-api/module',
  '@nuxtjs/style-resources',
  '@nuxtjs/stylelint-module', // https://go.nuxtjs.dev/stylelint
  '@nuxtjs/vuetify', // https://go.nuxtjs.dev/vuetify
  ...(() => {
    const {
      HOST: host = '',
      PORT: port,
      BASE: base = '/',
    } = process.env
    const normalizedHost = host.replace('localhost', 'http://127.0.0.1')
    const hostSuffix = port ? `:${port}` : ''
    const hostname = `${normalizedHost}${hostSuffix}`
    const baseHostname = `${hostname}${base}`

    return [
      [
        '@nuxtjs/robots',
        {
          Allow: '/',
          Host: baseHostname,
          Sitemap: `${baseHostname}sitemap.xml`,
        },
      ],
      [
        '@nuxtjs/sitemap',
        {
          hostname,
          trailingSlash: true,
        },
      ],
    ]
  })(),
]
