import { associations } from '~/config/associations'
import { createTechnologyLink, technologies } from '~/config/technologies'
import { createAccessibleLink, createUnorderedList } from '~/lib/config'
import { getProjectLink } from '~/lib/pages/projects'

import { ExperienceType } from '@/config/profile'

import type { Experience, Experiences } from '@/config/profile'

type ReferencedExperience = Override<
  Experience,
  {
    association: keyof typeof associations,
    intermediary?: keyof typeof associations,
  }
>
type ReferencedExperiences = Array<ReferencedExperience>

function mapReferencedExperiences (
  referencedExperiences: ReferencedExperiences,
): Experiences {
  return referencedExperiences.map((referencedExperience) => {
    const { association, intermediary, ...experience } = referencedExperience

    return {
      ...experience,
      association: associations[association],
      intermediary: intermediary ? associations[intermediary] : undefined,
    }
  })
}

export const experiences = mapReferencedExperiences([
  ...((): ReferencedExperiences => {
    const technologyKeys: Array<keyof typeof technologies> = [
      'react',
      'terraform',
      'kubernetes',
      'nextjs',
    ]
    const [
      react,
      terraform,
      kubernetes,
      nextjs,
    ] = technologyKeys.map(technologyKey => createTechnologyLink(technologyKey))
    const aws = createAccessibleLink('AWS', technologies['amazon-web-services'].url || '')

    return [
      {
        role: 'Software Developer II',
        type: ExperienceType.FULL_TIME_JOB,
        association: 'lightspeed',
        intermediary: 'inform-group',
        period: { start: '2023 April' },
        description: createUnorderedList([
          'Architected a hospitality platform migration software, facilitating concurrent development of data processing and UI components, and successfully delivered the first version within the scheduled 2-month timeframe.',
          'Conducted system analysis, defined requirements, and formulated a strategic implementation plan for the migration software, utilizing research methodologies including document analysis, usability testing, and expert validation.',
          `Developed the migration software extracting, transforming and importing entities from source platforms to the flagship platform using ${nextjs} and ${kubernetes}, ensuring scalability across multiple migrations.`,
        ]),
      },
      {
        role: 'Software Developer I',
        type: ExperienceType.FULL_TIME_JOB,
        association: 'lightspeed',
        intermediary: 'inform-group',
        period: { start: '2021 November', end: '2023 March' },
        description: createUnorderedList([
          `Built a restaurant inventory management software with ${react}, ${aws}, and ${terraform}, enhancing stock tracking, simplifying recipe management, and streamlining supply ordering for restaurant businesses.`,
          'Enhanced end-to-end test suite efficiency with parallelization and flakiness eradication using Cypress, reducing the test run duration from 45 to 15 minutes, with an estimated annual developer cost savings of $10,000.',
          'Liaised with Quality Assurance to craft maintainable, readable end-to-end testing scripts, using a declarative approach to abstract test steps, reducing script creation and updates from 6 to 3 days.',
          'Decommissioned a redundant development environment, transferring relevant functions to a production-like environment, resulting in an estimated annual infrastructure cost savings of $4,000.',
        ]),
      },
    ]
  })(),
  ...((): ReferencedExperiences => {
    const association = 'importgenius'
    const intermediary = 'code-ninja'
    const technologyKeys: Array<keyof typeof technologies> = [
      'nuxt',
      'express',
    ]
    const elasticsearch = createAccessibleLink(
      'Elasticsearch',
      'https://www.elastic.co/elasticsearch',
    )
    const recurly = createAccessibleLink(
      'Recurly',
      'https://recurly.com',
    )
    const [
      nuxt,
      express,
    ] = technologyKeys.map(technologyKey => createTechnologyLink(technologyKey))

    return [
      {
        role: 'Full Stack Engineer',
        type: ExperienceType.FULL_TIME_JOB,
        association,
        intermediary,
        period: {
          start: '2019 June',
          end: ' 2021 July',
        },
        description: createUnorderedList([
          `Incorporated ${recurly} into the platform via data migration, API integration, and user account synchronization, streamlining migration from legacy to modern subscription management through testing and phased deployment.`,
          `Engineered a global trade intelligence software utilizing frameworks and tools such as ${nuxt}, ${express}, and ${elasticsearch}, empowering businesses with comprehensive trade records, insights and analytics capabilities.`,
        ]),
      },
      {
        role: 'Full Stack Engineering Intern',
        type: ExperienceType.INTERNSHIP,
        association,
        intermediary,
        period: {
          start: '2018 September',
          end: '2018 December',
        },
        description: '',
      },
    ]
  })(),
  ((): ReferencedExperience => {
    const wordPress = createAccessibleLink(
      'WordPress',
      'https://wordpress.com',
    )
    const promotionalBanners = createAccessibleLink(
      'promotional banners',
      getProjectLink('keywest-internationale-sales-banners'),
    )
    const promotionalStickers = createAccessibleLink(
      'promotional stickers',
      getProjectLink('keywest-internationale-van-stickers'),
    )

    return {
      role: 'Web Developer Intern',
      type: ExperienceType.INTERNSHIP,
      association: 'keywest-internationale',
      period: {
        start: '2018 April',
        end: '2018 July',
      },
      description: createUnorderedList([
        `Orchestrated enhancements and maintenance of an e-commerce platform powered by ${wordPress}, refining its performance and user interface.`,
        `Crafted visually striking ${promotionalBanners} to boost brand awareness and drive traffic to the company's offerings.`,
        `Designed captivating full-body ${promotionalStickers} for the company's van, effectively enhancing brand visibility on the move and at various locations.`,
      ]),
    }
  })(),
  ((): ReferencedExperience => {
    const change = createAccessibleLink(
      '‘Change: A Hybrid Animation Film in a Database-Driven Website’',
      getProjectLink('change-hybrid-animation-database-driven-website'),
    )

    return {
      role: 'BSITDA Alumni',
      type: ExperienceType.STUDIES,
      association: 'feu-tech',
      period: {
        start: '2014 July',
        end: '2019 March',
      },
      description: createUnorderedList([
        'Earned a Bachelor\'s degree in Information Technology specializing in Digital Arts',
        `Spearheaded the development of a content management system for the capstone project ${change} of the La Prisma Group, earning the awards for Best Thesis, Website, Film and Trailer`,
      ]),
    }
  })(),
])
