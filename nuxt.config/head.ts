function createVuetifyFontPreload (font: string) {
  return {
    rel: 'preload stylesheet',
    as: 'style',
    href: `https://fonts.googleapis.com/css2?family=${font}:wght@100;300;400;500;700;900&display=swap`,
  }
}

export const head = {
  titleTemplate: (titleChunk: string) => {
    const name = 'John Ian Buñag'

    if (!titleChunk || titleChunk === name) { return name }

    return `${titleChunk} | ${name}`
  },
  htmlAttrs: { lang: 'en' },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: `John Ian Buñag's personal portfolio`,
    },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    createVuetifyFontPreload('Roboto'),
    createVuetifyFontPreload('Raleway'),
  ],
}
