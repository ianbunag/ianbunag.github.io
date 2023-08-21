import { associations } from '~/config/associations'
import { createTechnologyLink } from '~/config/technologies'
import { createAccessibleLink, createUnorderedList } from '~/lib/config'
import { getProjectLink } from '~/lib/pages/projects'

import type { technologies } from '~/config/technologies'

import { ExperienceType } from '@/config/profile'

import type { Experience, Experiences } from '@/config/profile'

type ReferencedExperience = Override<
  Experience,
  { association: keyof typeof associations }
>
type ReferencedExperiences = Array<ReferencedExperience>

function mapReferencedExperiences (
  referencedExperiences: ReferencedExperiences,
): Experiences {
  return referencedExperiences.map((referencedExperience) => {
    const { association, ...experience } = referencedExperience

    return {
      ...experience,
      association: associations[association],
    }
  })
}

export const experiences = mapReferencedExperiences([
  ...((): ReferencedExperiences => {
    const enableOurTeam = createAccessibleLink(
      'Enable Our Team',
      process.env.ENABLE_OUR_TEAM_LINK || '',
    )
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
        period: { start: '2023 April' },
        description: createUnorderedList([
          `Employed under ${enableOurTeam}`,
          'Developing a platform migration software',
          `Leveraging sophisticated tools and platforms, such as ${nextjs} and ${kubernetes}`,
        ]),
      },
      {
        role: 'Software Developer I',
        type: ExperienceType.FULL_TIME_JOB,
        association: 'lightspeed',
        period: { start: '2021 November', end: '2023 March' },
        description: createUnorderedList([
          `Employed under ${enableOurTeam}`,
          'Developed a restaurant inventory management software',
          `Utilized technologies like ${react}, ${aws} and ${terraform}`,
        ]),
      },
    ]
  })(),
  ...((): ReferencedExperiences => {
    const association = 'importgenius'
    const codeNinja = createAccessibleLink(
      'Code Ninja I.T. Solutions Inc.',
      process.env.CODE_NINJA_LINK || '',
    )
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
    const workedForDescription = `Employed under ${codeNinja}`

    return [
      {
        role: 'Full Stack Engineer',
        type: ExperienceType.FULL_TIME_JOB,
        association,
        period: {
          start: '2019 June',
          end: ' 2021 July',
        },
        description: createUnorderedList([
          workedForDescription,
          `Integrated ${recurly} with the platform`,
          `Implemented serverless solutions using ${aws}`,
        ]),
      },
      {
        role: 'Full Stack Engineering Intern',
        type: ExperienceType.INTERNSHIP,
        association,
        period: {
          start: '2018 September',
          end: '2018 December',
        },
        description: createUnorderedList([
          workedForDescription,
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
