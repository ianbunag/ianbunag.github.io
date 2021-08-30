// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify

const productionOptions = {
  /**
   *  Enable Vuetify progressive images with Nuxt.
   *    See https://github.com/nuxt-community/vuetify-module/issues/167
   */
  treeShake: {
    loaderOptions: {
      progressiveImages: {
        size: 12,
        sharp: true,
      },
    },
  },
}

export const vuetify = {
  optionsPath: '~/plugins/vuetify.ts',
  customVariables: ['~/assets/styles/vuetify/variables.scss'],
  ...(process.env.NODE_ENV === 'production' ? productionOptions : {}),
}
