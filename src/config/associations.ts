import type { AssociationMap } from '@/config/associations'

/**
 * Helper to preserve map keys while allowing inference during suggestion
 */
function defineAssociationMap<Map extends AssociationMap> (
  map: Map,
): Map {
  return map
}

export const associations = defineAssociationMap({
  'feu-tech': {
    name: 'Far Eastern University Institute of Technology',
    url: process.env.FEU_TECH_LINK,
    logoURL: 'logos/feu-tech.png',
    logoAccent: '#fcbd14',
  },
  'keywest-internationale': {
    name: 'Keywest Internationale Sales Corp.',
    url: process.env.KEYWEST_INTERNATIONALE_LINK,
    logoURL: 'logos/keywest-internationale.png',
    logoAccent: '#ef134f',
  },
  'code-ninja': {
    name: 'Code Ninja I.T. Solutions Inc.',
    url: process.env.CODE_NINJA_LINK,
    logoURL: 'logos/code-ninja.png',
    logoAccent: '#fff',
  },
  lightspeed: {
    name: 'Lightspeed',
    url: process.env.LIGHTSPEED_LINK,
    logoURL: 'logos/lightspeed.png',
    logoAccent: '#e81c1c',
  },
})
