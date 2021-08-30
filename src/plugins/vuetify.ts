import colors from 'vuetify/es5/util/colors'

import * as customIconComponents from '~/components/icons'
import BrandingLogoIcon from '~/components/branding/logo/icon.vue'

export const pluggedIcons = (() => {
  type CustomIconComponents = typeof customIconComponents
  type CustomIconKey = keyof CustomIconComponents
  type CustomIcon = CustomIconComponents[CustomIconKey]
  type CustomIcons = Record<CustomIconKey, CustomIcon>

  const entries =
    Object.entries(customIconComponents) as Array<[CustomIconKey, CustomIcon]>
  const customIcons: CustomIcons = entries.reduce(
    (accumulated, [key, component]) => ({
      ...accumulated,
      [key]: { component },
    }),
    {} as CustomIcons,
  )

  return {
    ...customIcons,
    brandLogo: { component: BrandingLogoIcon },
  }
})()

export default {
  icons: {
    iconfont: 'mdiSvg',
    values: pluggedIcons,
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
}
