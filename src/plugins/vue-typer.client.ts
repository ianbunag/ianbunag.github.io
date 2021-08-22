import Vue from 'vue'
import { VueTyper } from 'vue-typer'

/**
 * Importing VueTyper from SFC causes an error in server-side rendering (dev
 *  mode)
 * See workaround suggestion: https://stackoverflow.com/a/54729726/13235279
 */
Vue.component('VueTyper', VueTyper)
