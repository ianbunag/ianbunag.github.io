import { resolve } from 'path'

/**
 * Keep in sync with the following configurations:
 *  - tsconfig.json
 *  - .eslintrc.json
 *  - nuxt.config/build.ts
 */
export const alias = {
  '~': resolve(__dirname, '../src'),
  '@': resolve(__dirname, '../types'),
}
