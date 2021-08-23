/**
 * Suppress editor module not found errors when importing Vue single file
 *  components in typescript module
 *
 * See: https://stackoverflow.com/a/46315677/13235279
 */
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
