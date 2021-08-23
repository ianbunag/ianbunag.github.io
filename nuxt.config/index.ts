import { resolve } from 'path'

import { head } from './head'
import { plugins } from './plugins'
import { modules } from './modules'
import { vuetify } from './vuetify'
import { styleResources } from './style-resources'
import { buildModules } from './build-modules'
import { generate } from './generate'

export default {
  target: 'static',
  srcDir: 'src',
  alias: {
    '~': resolve(__dirname, '../src'),
    '@': resolve(__dirname, '../types'),
  },
  router: {
    base: '/portfolio/',
  },
  head,
  plugins,
  modules,
  vuetify,
  styleResources,
  build: {
    extractCSS: true,
  },
  buildModules,
  generate,
}
