import Vue from 'vue'
import * as wrappers from '~/components/wrappers'

Object.entries(wrappers).forEach(([name, component]) => {
  Vue.component(name, component)
})
