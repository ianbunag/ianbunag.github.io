import {
  requireProgressiveImage,
  LinkName,
} from '~/config/profile/projects/module'

import type { ProfileProjects } from '~/config/profile/projects/module'

export const threeDimensionDesign: ProfileProjects = [
  {
    name: 'Wine',
    period: 'February 2017',
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
      icon: 'mdiYoutube',
      link: process.env.WINE_3D_ANIMATION_LINK,
    },
  },
  {
    name: 'Plasma',
    period: 'February 2017',
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
      icon: 'mdiYoutube',
      link: process.env.PLASMA_3D_ANIMATION_LINK,
    },
  },
  {
    name: 'Rain',
    period: 'December 2016',
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
      icon: 'mdiYoutube',
      link: process.env.RAIN_3D_ANIMATION_LINK,
    },
  },
  {
    name: 'Snow Leopard',
    period: 'May 2016',
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
    period: 'April 2016',
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
]
