export const head = {
  titleTemplate: (titleChunk) => {
    // For some reason, titleTemplate cannot find reference to scoped variables
    const title = 'Ian Buñag'

    if (!titleChunk || titleChunk === title) { return title }

    return `${titleChunk} - ${title}`
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
