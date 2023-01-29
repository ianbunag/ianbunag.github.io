/**
 * See the following documentations for Vuetify dynamic progressive image
 *  loading:
 *  - https://github.com/vuetifyjs/vuetify-loader#loops-and-dynamic-paths
 *  - https://webpack.js.org/guides/dependency-management/
 *  - https://webpack.js.org/api/module-methods/#requirecontext
 */
export const requireProgressiveImage = (() => {
  const context = require.context(
    '~/?vuetify-preload',
    true,
    /\.(png|jpg)$/,
  )

  return (location: string) => context(location)
})()

export function createAccessibleLink (display: string, url: string): string {
  if (!url) { return display }

  const properties = [
    `href="${url}"`,
    `aria-label="${display}"`,
    'class="pf-link-light"',
  ].join(' ')

  return `<a ${properties}>${display}</a>`
}

export function createUnorderedList (entries: Array<string>): string {
  return `<ul><li>${entries.join('</li><li>')}</li></ul>`
}

export function createParagraph (sections: Array<string>): string {
  return `<p>${sections.join('</p><p>')}</p>`
}

export function emphasize (text: string): string {
  return `<strong>${text}</strong>`
}

export function createHeader (
  level: 1 | 2 | 3 | 4 | 5 | 6,
  text: string,
): string {
  return `<h${level}>${text}</h${level}>`
}

type CreateImageOptions = {
  link?: string,
  height?: number,
}

export function createImage (
  src: string,
  alt: string,
  { link, height }: CreateImageOptions = {},
): string {
  const attributes = [
    `src="${src}"`,
    `alt="${alt}"`,
    height && `height="${height}"`,
  ].filter(Boolean).join(' ')
  const image = `<img ${attributes}/>`

  if (link) {
    return `<a href="${link}">${image}</a>`
  }

  return image
}
