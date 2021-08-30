import type { ConfigIcons } from '~/config/icons'
import type { ConfigTechnologies } from '~/config/technologies'
import type { Project, Projects } from '@/config/profile'

export enum LinkName {
  VIEW_SOURCE= 'View source',
  TRY_ME = 'Try me!',
  WATCH_ME = 'Watch me!',
}
export type ProfileProject = Project<ConfigIcons, ConfigTechnologies>
export type ProfileProjects = Projects<ConfigIcons, ConfigTechnologies>

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
  const properties = [
    `href="${url}"`,
    `:aria-label="${display}"`,
    'target="_blank"',
    'disabled',
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
