import { createAccessibleLink, requireProgressiveImage } from '~/lib/config'
import { mapReferencedProjects } from '~/lib/config/profile/projects'

import type { ReferencedProject } from '~/lib/config/profile/projects'
import { createPeriod } from '~/lib/config/profile'

export const graphicsDesign = mapReferencedProjects([
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
])
