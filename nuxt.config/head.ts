export const head = {
  titleTemplate: (titleChunk: string) => {
    // titleTemplate cannot reference variables within module scope (unknown)
    const { name } = require('../src/config/profile.json')

    if (!titleChunk || titleChunk === name) { return name }

    return `${titleChunk} - ${name}`
  },
  htmlAttrs: { lang: 'en' },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
}
