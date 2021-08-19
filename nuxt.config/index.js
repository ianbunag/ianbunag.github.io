import { resolve } from 'path'

import { head } from './head'
import { buildModules } from './build-modules'
import { vuetify } from './vuetify'
import { generate } from './generate'

export default {
  target: 'static',
  srcDir: 'src',
  alias: { '~': resolve(__dirname, '../src') },
  router: { base: '/portfolio/' },
  head,
  buildModules,
  vuetify,
  generate,
}
