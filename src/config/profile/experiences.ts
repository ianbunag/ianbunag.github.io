import { associations } from '~/config/associations'
import { createTechnologyLink } from '~/config/technologies'
import { createAccessibleLink, createUnorderedList } from '~/lib/config'
import { getProjectLink } from '~/lib/pages/projects'

import type { technologies } from '~/config/technologies'

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
      'amazon-web-services',
      'terraform',
      'kubernetes',
      'nextjs',
    ]
    const [
      react,
      aws,
      terraform,
      kubernetes,
      nextjs,
    ] = technologyKeys.map(technologyKey => createTechnologyLink(technologyKey))

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
          'Developed a restaurant inventory management software',
          `Utilized technologies like ${react}, ${aws} and ${terraform}`,
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
      'amazon-web-services',
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
      aws,
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
          `Integrated ${recurly} with the platform`,
          `Implemented serverless solutions using ${aws}`,
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
        description: createUnorderedList([
          'Developed a global trade intelligence software',
          `Utilized frameworks and tools including ${nuxt}, ${express} and ${elasticsearch}`,
        ]),
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
        `Improved and maintained a ${wordPress} e-commerce website`,
        `Created eye-catching ${promotionalBanners}`,
        `Designed appealing ${promotionalStickers} for the company's van`,
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
