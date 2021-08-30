export const build = {
  extractCSS: true,
  transpile: [
    /**
     * Transpile Vuetify components imported from source.
     *  See https://github.com/nuxt-community/vuetify-module/issues/248#issuecomment-573300978
     *
     * For this case, transpiled module is untyped, which needs to be augmented.
     *  See: types/dependencies/vuetify.d.ts
     */
    'vuetify/lib/components/VGrid',
  ],
}
