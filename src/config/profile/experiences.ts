import { associations } from '~/config/associations'
import { createTechnologyLink } from '~/config/technologies'
import { createUnorderedList, createAccessibleLink } from '~/lib/config'
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
  ((): ReferencedExperience => {
    const informGroup = createAccessibleLink(
      'Inform Group',
      process.env.INFORM_GROUP_LINK || '',
    )

    return {
      role: 'Software Developer',
      type: ExperienceType.FULL_TIME_JOB,
      association: 'lightspeed',
      period: { start: '2021 November' },
      description: createUnorderedList([
        `Employed under ${informGroup}`,
        `Developer on the Hospitality team`,
      ]),
    }
  })(),
  ...((): ReferencedExperiences => {
    const association = 'code-ninja'
    const importGenius = createAccessibleLink(
      'ImportGenius',
      process.env.IMPORTGENIUS_LINK || '',
    )
    const technologyKeys: Array<keyof typeof technologies> = [
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
          `Core developer on the ${recurly} integration team`,
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
          `Utilized frameworks like ${nuxt}, ${lumen} and ${express}`,
          `Contributed to the ${elasticsearch} integration`,
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
        'Completed Bachelor of Science in Information Technology with Specialization in Digital Arts program',
        `Web developer for the capstone project ${change} by La Prisma - awarded the best thesis, website, film and trailer`,
      ]),
    }
  })(),
])
