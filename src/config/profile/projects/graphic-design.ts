import { requireProgressiveImage, createAccessibleLink } from '~/lib/config'

import type {
  ProfileProject,
  ProfileProjects,
} from '~/lib/config/profile/projects'

export const graphicsDesign: ProfileProjects = [
  ((): ProfileProject => {
    const keywestInternationaleSales = createAccessibleLink(
      'Keywest Internationale Sales Corp.',
      process.env.KEYWEST_INTERNATIONALE_LINK || '',
    )

    return {
      name: 'Keywest Internationale Sales Banners',
      key: 'keywest-internationale-sales-banners',
      period: '2018 July',
      tags: [
        'graphic',
        'design',
        'banners',
        'internship',
      ],
      description: `Banner Designs for ${keywestInternationaleSales}.`,
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
  ((): ProfileProject => {
    const cranePhilippines = createAccessibleLink(
      'Crane Philippines',
      process.env.CRANE_PHILIPPINES_LINK || '',
    )

    return {
      name: 'Crane Philippines Banners',
      key: 'crane-philippines-banners',
      period: '2018 July',
      tags: [
        'graphic',
        'design',
        'banners',
        'internship',
      ],
      description: `Banner Designs for ${cranePhilippines}.`,
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
  ((): ProfileProject => {
    const optimumIndustrialSales = createAccessibleLink(
      'Optimum Industrial Sales Corp.',
      process.env.OPTIMUM_INDUSTRIAL_LINK || '',
    )

    return {
      name: 'Optimum Industrial Sales Banners',
      key: 'optimum-industrial-sales-banners',
      period: '2018 July',
      tags: [
        'graphic',
        'design',
        'banners',
        'internship',
      ],
      description: `Banner Designs for ${optimumIndustrialSales}.`,
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
  ((): ProfileProject => {
    const keywestInternationaleSales = createAccessibleLink(
      'Keywest Internationale Sales Corp.',
      process.env.KEYWEST_INTERNATIONALE_LINK || '',
    )

    return {
      name: 'Keywest Internationale Sales Van Stickers',
      key: 'keywest-internationale-van-stickers',
      period: '2018 July',
      tags: [
        'graphic',
        'design',
        'vehicle',
        'sticker',
        'internship',
      ],
      description: `Sticker design for the Mitsubishi L300 van of ${keywestInternationaleSales}.`,
      images: [requireProgressiveImage('./assets/images/projects/keywest-internationale/stickers/mitsubishi-L300.jpg')],
      technologies: [
        'adobe-photoshop',
        'adobe-illustrator',
      ],
    }
  })(),
  ((): ProfileProject => {
    const rusticTable = createAccessibleLink(
      'Rustic Table',
      process.env.RUSTIC_TABLE_LINK || '',
    )

    return {
      name: 'Rustic Table Menu',
      key: 'rustic-table-menu',
      period: '2017 March',
      tags: [
        'graphic',
        'design',
        'menu',
        'freelance',
      ],
      description: `Menu design for ${rusticTable}.`,
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
]
