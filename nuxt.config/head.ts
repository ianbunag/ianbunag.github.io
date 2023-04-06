import { introduction } from '../src/config/profile/introduction'
import theme from '../src/config/theme.json'

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
      content: introduction,
    },
    { name: 'theme-color', content: theme['background-darker'] },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'robots', content: 'index, follow' },
    {
      name: 'google-site-verification',
      content: process.env.GOOGLE_SITE_VERIFICATION,
    },
    { property: 'og:type', content: 'profile' },
    { property: 'og:image', content: '/og-image.png' },
  ],
  link: [
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      href: '/touch-icon.png',
    },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    createVuetifyFontPreload('Roboto'),
    createVuetifyFontPreload('Raleway'),
    createVuetifyFontPreload('Lato'),
  ],
}
