import { associations } from '~/config/associations'
import { createTechnologyLink, technologies } from '~/config/technologies'
import { createAccessibleLink, createUnorderedList } from '~/lib/config'
import { getProjectLink } from '~/lib/pages/projects'
import { createPeriod } from '~/lib/config/profile'

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
    const {
      association,
      intermediary,
      ...experience
    } = referencedExperience

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
      'transifex',
      'heap',
      'intercom',
    ]
    const [
      react,
      terraform,
      transifex,
      heap,
      intercom,
    ] = technologyKeys.map(technologyKey => createTechnologyLink(technologyKey))
    const aws = createAccessibleLink('AWS', technologies['amazon-web-services'].url || '')

    return [
      {
        role: 'Senior Software Developer',
        type: ExperienceType.FULL_TIME_JOB,
        association: 'lightspeed',
        intermediary: 'inform-group',
        period: { start: createPeriod(2025, 'January') },
        description: createUnorderedList([
          'Engineered a store credit functionality through agentic coding, accelerating time-to-market by 30% while maintaining quality.',
          'Refactored key database queries on customer and order tables, slashing heavy query run time by 75% and reducing database load, which led to substantial savings in cloud infrastructure costs.',
        ]),
      },
      {
        role: 'Software Developer II',
        type: ExperienceType.FULL_TIME_JOB,
        association: 'lightspeed',
        intermediary: 'inform-group',
        period: {
          start: createPeriod(2023, 'April'),
          end: createPeriod(2024, 'December'),
        },
        description: createUnorderedList([
          `Developed a real-time mobile app for restaurant managers, integrating localization through ${transifex}, user tracking with ${heap}, and customer engagement features via ${intercom} to boost usability and user engagement.`,
          'Architected a hospitality platform migration tool that enabled concurrent team development, resulting in a two-month delivery and an 80% reduction in manual effort for the sales team when migrating customer data.',
        ]),
      },
      {
        role: 'Software Developer I',
        type: ExperienceType.FULL_TIME_JOB,
        association: 'lightspeed',
        intermediary: 'inform-group',
        period: {
          start: createPeriod(2021, 'November'),
          end: createPeriod(2023, 'March'),
        },
        description: createUnorderedList([
          `Built a restaurant inventory management software with ${react}, ${aws}, and ${terraform}, enhancing stock tracking, simplifying recipe management, and streamlining supply ordering.`,
          'Enhanced end-to-end test suite efficiency using Cypress, reducing the test run duration from 45 to 15 minutes, with an estimated annual developer cost savings of $10,000.',
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
          start: createPeriod(2019, 'June'),
          end: createPeriod(2021, 'July'),
        },
        description: createUnorderedList([
          `Incorporated ${recurly} into the platform via data migration, API integration, and user account synchronization, which streamlined the migration to a modern subscription management system.`,
          `Engineered a global trade intelligence software using ${nuxt}, ${express}, and ${elasticsearch}, providing businesses with comprehensive trade records, insights, and analytics capabilities.`,
        ]),
      },
      {
        role: 'Full Stack Engineering Intern',
        type: ExperienceType.INTERNSHIP,
        association,
        intermediary,
        period: {
          start: createPeriod(2018, 'September'),
          end: createPeriod(2018, 'December'),
        },
        description: createUnorderedList([`Engineered a global trade intelligence software using ${nuxt}, ${express}, and ${elasticsearch}, providing businesses with comprehensive trade records, insights, and analytics capabilities.`]),
      },
    ]
  })(),
  ((): ReferencedExperience => {
    const wordPress = createAccessibleLink(
      'WordPress',
      'https://wordpress.com',
    )

    return {
      role: 'Web Developer Intern',
      type: ExperienceType.INTERNSHIP,
      association: 'keywest-internationale',
      period: {
        start: createPeriod(2018, 'April'),
        end: createPeriod(2018, 'July'),
      },
      description: createUnorderedList([`Directed the continuous refinement of a ${wordPress} e-commerce platform, enhancing its performance and user interface to ensure a seamless and modern user experience.`]),
    }
  })(),
  ((): ReferencedExperience => {
    const change = createAccessibleLink(
      '"Change: A Hybrid Animation Film in a Database-Driven Website"',
      getProjectLink('change-hybrid-animation-database-driven-website'),
    )

    return {
      role: 'Bachelor of Science in Information Technology',
      type: ExperienceType.STUDIES,
      association: 'feu-tech',
      period: {
        start: createPeriod(2014, 'July'),
        end: createPeriod(2019, 'March'),
      },
      description: createUnorderedList([`Led the development of a content management system (CMS) for the capstone project ${change}. The project won Best Thesis, Website, Film, and Trailer.`]),
    }
  })(),
])
