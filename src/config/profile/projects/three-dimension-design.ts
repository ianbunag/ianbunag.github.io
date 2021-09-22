import { mapReferencedProjects, LinkName } from '~/lib/config/profile/projects'
import { requireProgressiveImage } from '~/lib/config'

export const threeDimensionDesign = mapReferencedProjects([
  {
    name: 'Wine',
    key: 'wine',
    period: '2017 February',
    tags: [
      '3D',
      'design',
      'animation',
      'university',
    ],
    description: '3D animation of a wine being poured into a wine glass.',
    images: [
      './assets/images/projects/wine/wine-1.jpg',
      './assets/images/projects/wine/wine-2.jpg',
      './assets/images/projects/wine/wine-3.jpg',
      './assets/images/projects/wine/wine-4.jpg',
    ].map(requireProgressiveImage),
    technologies: [
      'autodesk-maya',
      'adobe-photoshop',
    ],
    primaryLink: {
      text: LinkName.WATCH_ME,
      link: process.env.WINE_3D_ANIMATION_LINK,
      linkIcon: 'mdiYoutube',
    },
  },
  {
    name: 'Plasma',
    key: 'plasma',
    period: '2017 February',
    tags: [
      '3D',
      'design',
      'animation',
      'university',
    ],
    description: '3D animation of a plasma globe.',
    images: [
      './assets/images/projects/plasma/plasma-1.jpg',
      './assets/images/projects/plasma/plasma-2.jpg',
      './assets/images/projects/plasma/plasma-3.jpg',
      './assets/images/projects/plasma/plasma-4.jpg',
    ].map(requireProgressiveImage),
    technologies: [
      'autodesk-maya',
      'adobe-photoshop',
    ],
    primaryLink: {
      text: LinkName.WATCH_ME,
      link: process.env.PLASMA_3D_ANIMATION_LINK,
      linkIcon: 'mdiYoutube',
    },
  },
  {
    name: 'Rain',
    key: 'rain',
    period: '2016 December',
    tags: [
      '3D',
      'design',
      'animation',
      'university',
    ],
    description: '3D animation of a thunderstorm.',
    images: [
      './assets/images/projects/rain/rain-1.jpg',
      './assets/images/projects/rain/rain-2.jpg',
      './assets/images/projects/rain/rain-3.jpg',
      './assets/images/projects/rain/rain-4.jpg',
    ].map(requireProgressiveImage),
    technologies: [
      'autodesk-maya',
      'adobe-photoshop',
    ],
    primaryLink: {
      text: LinkName.WATCH_ME,
      link: process.env.RAIN_3D_ANIMATION_LINK,
      linkIcon: 'mdiYoutube',
    },
  },
  {
    name: 'Snow Leopard',
    key: 'snow-leopard',
    period: '2016 May',
    tags: [
      '3D',
      'design',
      'modeling',
      'university',
    ],
    description: 'Semi-realistic 3D model of a tank in snowy terrain.',
    images: [requireProgressiveImage('./assets/images/projects/snow-leopard/snow-leopard.jpg')],
    technologies: [
      'autodesk-maya',
      'adobe-photoshop',
    ],
  },
  {
    name: `Corey's Bedroom`,
    key: 'coreys-bedroom',
    period: '2016 April',
    tags: [
      '3D',
      'design',
      'modeling',
      'university',
    ],
    description: 'Advanced 3D model of Corey’s bedroom from Grojband with his band-mate Laney.',
    images: [requireProgressiveImage('./assets/images/projects/coreys-bedroom/coreys-bedroom.jpg')],
    technologies: [
      'autodesk-maya',
      'adobe-illustrator',
    ],
  },
])
