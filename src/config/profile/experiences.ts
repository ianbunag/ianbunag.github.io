import { createUnorderedList, createAccessibleLink } from '~/config/module'
import { createTechnologyLink } from '~/config/technologies'

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
          `Core developer of the ${recurly} integration team`,
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
        `Designed promotional banners for the company's website`,
        `Designed promotional stickers for the company's van`,
      ]),
    }
  })(),
  {
    role: 'BSITDA Alumni',
    type: Type.STUDIES,
    association: 'feu-tech',
    period: {
      start: '2014 July',
      end: '2019 March',
    },
    description: createUnorderedList([
      'Completed Bachelor of Science in Information Technology with Specialization in Digital Arts program',
      'Member of the La Prisma Group - awarded the best thesis, website, film and trailer of BSITDA Capstone Project Batch 15',
    ]),
  },
]
