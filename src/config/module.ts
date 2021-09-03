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
    'target="_blank"',
    'rel="noopener noreferrer"',
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
