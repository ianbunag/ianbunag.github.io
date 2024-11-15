import { requireProgressiveImage } from '~/lib/config'
import { LinkName, mapReferencedProjects } from '~/lib/config/profile/projects'
import { createPeriod } from '~/lib/config/profile'

export const threeDimensionDesign = mapReferencedProjects([
  {
    name: 'Wine',
    key: 'wine',
    period: createPeriod(2017, 'February'),
    tags: [
      '3D',
      'design',
      'animation',
      'university',
    ],
    description: 'Animated a wine bottle pouring into a glass using Autodesk Maya, demonstrating intricate fluid simulation techniques and smart image-based lighting (SIBL) for a visually stunning result.',
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
    period: createPeriod(2017, 'February'),
    tags: [
      '3D',
      'design',
      'animation',
      'university',
    ],
    description: 'Crafted an animated plasma globe in Autodesk Maya, meticulously detailing electricity animation and seamlessly integrating it with a dynamic 360-degree panoramic background.',
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
    period: createPeriod(2016, 'December'),
    tags: [
      '3D',
      'design',
      'animation',
      'university',
    ],
    description: 'Crafted a thunderstorm scene in Autodesk Maya, seamlessly integrating particle effects, lifelike illumination, and dynamic shadows to enhance depth and realism.',
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
    period: createPeriod(2016, 'May'),
    tags: [
      '3D',
      'design',
      'modeling',
      'university',
    ],
    description: 'Modeled a semi-realistic tank in a snowy terrain using Autodesk Maya, incorporating particle simulation, image-based displacement mapping, and smart image-based lighting (SIBL) to enhance realism.',
    images: [requireProgressiveImage('./assets/images/projects/snow-leopard/snow-leopard.jpg')],
    technologies: [
      'autodesk-maya',
      'adobe-photoshop',
    ],
  },
  {
    name: `Corey's Bedroom`,
    key: 'coreys-bedroom',
    period: createPeriod(2016, 'April'),
    tags: [
      '3D',
      'design',
      'modeling',
      'university',
    ],
    description: 'Modeled Corey\'s bedroom from Grojband, including his bandmate Laney, with emphasis on translucent material lighting and image-based texture mapping.',
    images: [requireProgressiveImage('./assets/images/projects/coreys-bedroom/coreys-bedroom.jpg')],
    technologies: [
      'autodesk-maya',
      'adobe-illustrator',
    ],
  },
])
