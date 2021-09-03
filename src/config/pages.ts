import { icons } from '~/config'

interface Page {
  name: string,
  route: string,
  icon: string,
}
type PageMap = Record<string, Page>

/**
 * Helper to preserve map keys while allowing inference during suggestion
 */
function definePageMap<Map extends PageMap> (map: Map): Map {
  return map
}

export const pages = definePageMap({
  HOME: {
    name: 'Home',
    route: '/',
    icon: icons.mdiHome,
  },
  TECH_STACK: {
    name: 'Tech Stack',
    route: '/tech-stack/',
    icon: icons.mdiFlashCircle,
  },
  PROJECTS: {
    name: 'Projects',
    route: '/projects/',
    icon: icons.mdiLightbulbOnOutline,
  },
})
