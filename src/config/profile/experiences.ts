import { createUnorderedList, createAccessibleLink } from '~/lib/config'
import { createTechnologyLink } from '~/config/technologies'
import { getProjectLink } from '~/lib/pages/projects'

import type { ConfigAssociations } from '~/config/associations'
import type { ConfigTechnologyKeys } from '~/config/technologies'
import type { Experience, Experiences } from '@/config/profile'

export enum Type {
  FULL_TIME_JOB,
  INTERNSHIP,
  STUDIES,
}

/**
 * @TODO Make consuming components pure by refactoring to pattern with
 *  src/config/profile/links.ts reference implementation
 */
export type ProfileExperience = Experience<Type, ConfigAssociations>
export type ProfileExperiences = Experiences<Type, ConfigAssociations>

export const experiences: ProfileExperiences = [
  ...((): ProfileExperiences => {
    const association = 'code-ninja'
    const importGenius = createAccessibleLink(
      'ImportGenius',
      process.env.IMPORTGENIUS_LINK || '',
    )
    const technologies: Array<ConfigTechnologyKeys> = [
      'nuxt',
      'lumen',
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
      lumen,
      express,
      aws,
    ] = technologies.map(technology => createTechnologyLink(technology))
    const workedForDescription = `Worked for the ${importGenius} startup`

    return [
      {
        role: 'Full Stack Engineer',
        type: Type.FULL_TIME_JOB,
        association,
        period: {
          start: '2019 June',
          end: ' 2021 July',
        },
        description: createUnorderedList([
          workedForDescription,
          `Core developer on the ${recurly} integration team`,
          `Implemented serverless services with ${aws}`,
        ]),
      },
      {
        role: 'Full Stack Engineering Intern',
        type: Type.INTERNSHIP,
        association,
        period: {
          start: '2018 September',
          end: '2018 December',
        },
        description: createUnorderedList([
          workedForDescription,
          `Utilized frameworks like ${nuxt}, ${lumen} and ${express}`,
          `Contributed to the ${elasticsearch} integration`,
        ]),
      },
    ]
  })(),
  ((): ProfileExperience => {
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
      type: Type.INTERNSHIP,
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
  ((): ProfileExperience => {
    const change = createAccessibleLink(
      'Change: A Hybrid Animation Film in a Database-Driven Website',
      getProjectLink('change-hybrid-animation-database-driven-website'),
    )

    return {
      role: 'BSITDA Alumni',
      type: Type.STUDIES,
      association: 'feu-tech',
      period: {
        start: '2014 July',
        end: '2019 March',
      },
      description: createUnorderedList([
        'Completed Bachelor of Science in Information Technology with Specialization in Digital Arts program',
        `Web developer for the capstone project ${change} by La Prisma - awarded the best thesis, website, film and trailer`,
      ]),
    }
  })(),
]
