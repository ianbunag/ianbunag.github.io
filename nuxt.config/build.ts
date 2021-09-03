import { resolve } from 'path'

import jsonImporter from 'node-sass-json-importer'

export const build = {
  extractCSS: { ignoreOrder: true },
  postcss: { plugins: { cssnano: {} } },
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
  loaders: {
    scss: {
      sassOptions: {
        importer: jsonImporter({
          resolver (dir: string, url: string) {
            return url.startsWith('~/')
              ? resolve(dir, 'src', url.substr(2))
              : resolve(dir, url)
          },
        }),
      },
    },
  },
}
