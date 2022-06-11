import { icons } from '~/config/icons'

interface Page {
  name: string,
  route: string,
  icon: string,
}
type PageMap = Record<string, Page>
type ReferencedPage = Override<
  Page,
  { icon: keyof typeof icons }
>
type ReferencedPageMap = Record<string, ReferencedPage>

function mapReferencedPages (map: ReferencedPageMap): PageMap {
  const mapEntries = Object.entries(map)
  const mappedEntries: Array<[keyof ReferencedPageMap, Page]> = mapEntries
    .map(([key, { icon, ...page }]) => {
      return [key, { ...page, icon: icons[icon] }]
    })

  return Object
    .fromEntries(mappedEntries) as Record<keyof ReferencedPageMap, Page>
}

export const pages = mapReferencedPages({
  HOME: {
    name: 'Home',
    route: '/',
    icon: 'mdiHome',
  },
  TECH_STACK: {
    name: 'Tech Stack',
    route: '/tech-stack/',
    icon: 'mdiLightningBoltCircle',
  },
  PROJECTS: {
    name: 'Projects',
    route: '/projects/',
    icon: 'mdiLightbulbOnOutline',
  },
  CONTACT: {
    name: 'Contact',
    route: '/#contact',
    icon: 'mdiPhone',
  },
})
