import theme from '../src/config/theme.json'
import { alias } from './alias'
import { env } from './env'
import { head } from './head'
import { plugins } from './plugins'
import { vuetify } from './vuetify'
import { css } from './css'
import { styleResources } from './style-resources'
import { build } from './build'
import { buildModules } from './build-modules'
import { generate } from './generate'

export default {
  target: 'static',
  srcDir: 'src',
  router: { base: process.env.BASE },
  loading: { color: theme.accent },
  alias,
  env,
  head,
  plugins,
  vuetify,
  css,
  styleResources,
  build,
  buildModules,
  generate,
}
