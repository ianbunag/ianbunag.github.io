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
    //  See https://web.dev/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  ],
}
