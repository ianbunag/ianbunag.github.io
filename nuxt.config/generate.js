export const generate = {
  dir: 'public',
  /**
   * Issue with static site generation and async functions with
   *  composition-api
   * See https://github.com/nuxt-community/composition-api/issues/44
   */
  interval: 2000,
}
