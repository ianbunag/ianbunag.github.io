import { createAccessibleLink, requireProgressiveImage } from '~/lib/config'
import { LinkName, mapReferencedProjects } from '~/lib/config/profile/projects'
import { createPeriod } from '~/lib/config/profile'

import type { ReferencedProject } from '~/lib/config/profile/projects'

export const creativeMedia = mapReferencedProjects([
  ((): ReferencedProject => {
    const keywestInternationaleSales = createAccessibleLink(
      'Keywest Internationale Sales Corp',
      process.env.KEYWEST_INTERNATIONALE_LINK || '',
    )

    return {
      name: 'Keywest Internationale Sales Banners',
      key: 'keywest-internationale-sales-banners',
      period: createPeriod(2018, 'July'),
      tags: [
        'creative',
        'media',
        'graphic',
        'design',
        'banners',
        'internship',
      ],
      description: `Designed visually captivating promotional banners for children's toy products at ${keywestInternationaleSales}, boosting brand visibility and attracting potential customers to the company's product line.`,
      images: [
        './assets/images/projects/keywest-internationale/banners/perler-beads.jpg',
        './assets/images/projects/keywest-internationale/banners/thinking-putty.jpg',
        './assets/images/projects/keywest-internationale/banners/itty-bitty-boo.jpg',
      ].map(requireProgressiveImage),
      technologies: [
        'adobe-photoshop',
        'adobe-illustrator',
      ],
    }
  })(),
  ((): ReferencedProject => {
    const createCraneLink = (content: string) => createAccessibleLink(
      content,
      process.env.CRANE_PHILIPPINES_LINK || '',
    )

    return {
      name: 'Crane Philippines Banners',
      key: 'crane-philippines-banners',
      period: createPeriod(2018, 'July'),
      tags: [
        'creative',
        'media',
        'graphic',
        'design',
        'banners',
        'internship',
      ],
      description: `Crafted visually captivating promotional banners for ${createCraneLink('Crane Philippines\'')} humidifier products, boosting brand recognition and driving consumer engagement towards the company's product range.`,
      images: [
        './assets/images/projects/crane-philippines/banners/humidifier-liquids.jpg',
        './assets/images/projects/crane-philippines/banners/oscillating-tower-fan.jpg',
        './assets/images/projects/crane-philippines/banners/travel-humidifier.jpg',
      ].map(requireProgressiveImage),
      technologies: [
        'adobe-photoshop',
        'adobe-illustrator',
      ],
    }
  })(),
  ((): ReferencedProject => {
    const optimumIndustrialSales = createAccessibleLink(
      'Optimum Industrial Sales Corp',
      process.env.OPTIMUM_INDUSTRIAL_LINK || '',
    )

    return {
      name: 'Optimum Industrial Sales Banners',
      key: 'optimum-industrial-sales-banners',
      period: createPeriod(2018, 'July'),
      tags: [
        'creative',
        'media',
        'graphic',
        'design',
        'banners',
        'internship',
      ],
      description: `Designed compelling promotional banners for ${optimumIndustrialSales} showcasing construction supplies, boosting brand visibility and attracting potential customers to the company's product offerings.`,
      images: [
        './assets/images/projects/optimum-industrial-banners/banners/bolts-and-nuts.jpg',
        './assets/images/projects/optimum-industrial-banners/banners/scaffolding-materials.jpg',
      ].map(requireProgressiveImage),
      technologies: [
        'adobe-photoshop',
        'adobe-illustrator',
      ],
    }
  })(),
  ((): ReferencedProject => {
    const createKeywestLink = (content: string) => createAccessibleLink(
      content,
      process.env.KEYWEST_INTERNATIONALE_LINK || '',
    )

    return {
      name: 'Keywest Internationale Sales Van Stickers',
      key: 'keywest-internationale-van-stickers',
      period: createPeriod(2018, 'July'),
      tags: [
        'creative',
        'media',
        'graphic',
        'design',
        'vehicle',
        'sticker',
        'internship',
      ],
      description: `Designed captivating full-body promotional stickers for the ${createKeywestLink('Keywest Internationale Sales Corp\'s')} van, effectively enhancing brand visibility on the move and at various locations.`,
      images: [requireProgressiveImage('./assets/images/projects/keywest-internationale/stickers/mitsubishi-L300.jpg')],
      technologies: [
        'adobe-photoshop',
        'adobe-illustrator',
      ],
    }
  })(),
  ((): ReferencedProject => {
    const rusticTable = createAccessibleLink(
      'Rustic Table',
      process.env.RUSTIC_TABLE_LINK || '',
    )

    return {
      name: 'Rustic Table Menu',
      key: 'rustic-table-menu',
      period: createPeriod(2017, 'March'),
      tags: [
        'creative',
        'media',
        'graphic',
        'design',
        'menu',
        'freelance',
      ],
      description: `Crafted ${rusticTable}'s menu with a modern design, enhancing visual appeal and user experience.`,
      images: [
        './assets/images/projects/rustic-table/cover.jpg',
        './assets/images/projects/rustic-table/page-1-2.jpg',
        './assets/images/projects/rustic-table/page-3-4.jpg',
        './assets/images/projects/rustic-table/page-5-6.jpg',
        './assets/images/projects/rustic-table/page-7-8.jpg',
        './assets/images/projects/rustic-table/page-9-10.jpg',
      ].map(requireProgressiveImage),
      technologies: [
        'adobe-photoshop',
        'adobe-illustrator',
      ],
    }
  })(),
  {
    name: 'Wine',
    key: 'wine',
    period: createPeriod(2017, 'February'),
    tags: [
      'creative',
      'media',
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
      'creative',
      'media',
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
      'creative',
      'media',
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
      'creative',
      'media',
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
      'creative',
      'media',
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
