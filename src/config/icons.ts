import {
  mdiLanguageTypescript,
  mdiSass,
  mdiLanguagePhp,
  mdiLanguagePython,
  mdiVuetify,
  mdiBootstrap,
  mdiNuxt,
  mdiVuejs,
  mdiGitlab,
  mdiAws,
  mdiGoogleCloud,
  mdiClose,
  mdiAlertOctagonOutline,
  mdiNodejs,
  mdiWebpack,
  mdiDocker,
  mdiConsole,
  mdiExpandAll,
  mdiWeb,
  mdiApplication,
  mdiPencilRuler,
  mdiCube,
  mdiArrowTopRight,
  mdiHome,
  mdiLightbulbOnOutline,
  mdiCodeTags,
  mdiEslint,
  mdiLanguageCss3,
  mdiLanguageJava,
  mdiNpm,
  mdiYoutube,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLightningBoltCircle,
  mdiLanguageMarkdownOutline,
  mdiSchool,
  mdiNotebookEdit,
  mdiBriefcaseVariant,
  mdiDomain,
  mdiPhone,
  mdiEmail,
  mdiLinkedin,
  mdiTwitter,
  mdiContentCopy,
  mdiMicrosoftVisualStudioCode,
  mdiReact,
  mdiGamepadVariantOutline,
  mdiGithub,
  mdiLanguageGo,
  mdiTerraform,
} from '@mdi/js'

import { pluggedIcons } from '~/plugins/vuetify'

import type { IconMap } from '@/config/icons'

type PluggedIcons = typeof pluggedIcons
type CustomIconKey = keyof PluggedIcons
type CustomIconReference = `$${keyof PluggedIcons}`
type CustomIcons = Record<CustomIconKey, CustomIconReference>

/**
 * Helper to preserve map keys while allowing inference during suggestion
 */
function defineIconMap<Map extends IconMap> (map: Map): Map {
  return map
}

/**
 * Optimization suggestion by Vuetify
 *  See https://vuetifyjs.com/en/features/icon-fonts/#material-design-icons-js-svg
 */
export const mdi = defineIconMap({
  mdiLanguageTypescript,
  mdiSass,
  mdiLanguagePhp,
  mdiLanguagePython,
  mdiVuetify,
  mdiBootstrap,
  mdiNuxt,
  mdiVuejs,
  mdiGitlab,
  mdiAws,
  mdiGoogleCloud,
  mdiClose,
  mdiAlertOctagonOutline,
  mdiNodejs,
  mdiWebpack,
  mdiDocker,
  mdiConsole,
  mdiExpandAll,
  mdiWeb,
  mdiApplication,
  mdiPencilRuler,
  mdiCube,
  mdiArrowTopRight,
  mdiHome,
  mdiLightbulbOnOutline,
  mdiCodeTags,
  mdiEslint,
  mdiLanguageCss3,
  mdiLanguageJava,
  mdiNpm,
  mdiYoutube,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLightningBoltCircle,
  mdiLanguageMarkdownOutline,
  mdiSchool,
  mdiNotebookEdit,
  mdiBriefcaseVariant,
  mdiDomain,
  mdiPhone,
  mdiEmail,
  mdiLinkedin,
  mdiTwitter,
  mdiContentCopy,
  mdiMicrosoftVisualStudioCode,
  mdiReact,
  mdiGamepadVariantOutline,
  mdiGithub,
  mdiLanguageGo,
  mdiTerraform,
})

export const custom: CustomIcons = (() => {
  type Entries = Array<[CustomIconKey, CustomIconReference]>

  const keys =
    Object.keys(pluggedIcons) as Array<keyof PluggedIcons>
  const entries = keys.map(key => [key, `$${key}`]) as Entries

  return defineIconMap(entries.reduce(
    (accumulated, [key, reference]) => ({ ...accumulated, [key]: reference }),
    {} as CustomIcons,
  ))
})()

export const icons = defineIconMap({
  ...mdi,
  ...custom,
})
