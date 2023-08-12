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
    const informGroup = createAccessibleLink(
      'Inform Group',
      process.env.INFORM_GROUP_LINK || '',
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
          `Currently employed under ${informGroup}`,
          'Developing a platform migration software',
          `Utilizing tools and platforms such as ${nextjs} and ${kubernetes}`,
        ]),
      },
      {
        role: 'Software Developer I',
        type: ExperienceType.FULL_TIME_JOB,
        association: 'lightspeed',
        period: { start: '2021 November', end: '2023 March' },
        description: createUnorderedList([
          `Employed under ${informGroup}`,
          'Developed a restaurant inventory management software',
          `Utilized tools and platforms such as ${react}, ${aws} and ${terraform}`,
        ]),
      },
    ]
  })(),
  ...((): ReferencedExperiences => {
    const association = 'code-ninja'
    const importGenius = createAccessibleLink(
      'ImportGenius',
      process.env.IMPORTGENIUS_LINK || '',
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
    const workedForDescription = `Worked for the ${importGenius} startup`

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
          `Implemented serverless services with ${aws}`,
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
          `Utilized frameworks and tools such as ${nuxt}, ${express} and ${elasticsearch}`,
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
        `Enhanced and maintained the company's ${wordPress} site`,
        `Designed ${promotionalBanners} for the company's website`,
        `Designed ${promotionalStickers} for the company's van`,
      ]),
    }
  })(),
  ((): ReferencedExperience => {
    const change = createAccessibleLink(
      'Change: A Hybrid Animation Film in a Database-Driven Website',
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
        'Completed Bachelor of Science in Information Technology with specialization in Digital Arts program',
        `Developed the web application of the capstone project ${change} by the La Prisma Group`,
      ]),
    }
  })(),
])
