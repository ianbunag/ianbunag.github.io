import { associations } from '~/config/associations'
import { createUnorderedList } from '~/lib/config'
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
  {
    role: 'Community Desk Assistant',
    type: ExperienceType.INTERNSHIP,
    association: 'sjsu',
    period: {
      start: createPeriod(2026, 'August'),
    },
    description: '',
  },
  {
    role: 'Master of Science in Software Engineering | GPA: 3.8',
    type: ExperienceType.STUDIES,
    association: 'sjsu',
    period: {
      start: createPeriod(2026, 'January'),
    },
    description: createUnorderedList(['Led cross-functional graduate student teams across software, data science, and cybersecurity through complex engineering challenges to deliver high-quality technical presentations.']),
  },
  {
    role: 'Senior Software Developer',
    type: ExperienceType.FULL_TIME_JOB,
    association: 'lightspeed',
    intermediary: 'inform-group',
    period: {
      start: createPeriod(2025, 'January'),
      end: createPeriod(2025, 'December'),
    },
    description: createUnorderedList([
      'Implemented secure store credit functionality in PHP, utilizing Redis for idempotency keys and PostgreSQL transactions to prevent race conditions, accelerating time-to-market by 30% through agentic AI and LLM-assisted programming.',
      'Modernized the primary login interface with React and PHP, deploying ReCAPTCHA and multi-factor authentication (Authenticator, Email OTP) to establish secure baseline access for over 10,000 active accounts.',
      'Refactored PostgreSQL queries across high-volume customer and order tables, reducing execution time by 75% to deliver low-latency responses and support a highly scalable backend.',
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
      'Developed a React Native mobile application for restaurant managers, integrating with enterprise-scale Java and Python web services to streamline data delivery and accelerate decision-making workflows for a global base of over 5,000 users.',
      'Architected a robust migration tool on a distributed Docker container infrastructure using Next.js, facilitating concurrent team development to achieve a 2-month delivery and an 80% reduction in manual data migration.',
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
      'Built a cloud-native restaurant inventory management platform using AWS and Terraform, optimizing automated stock tracking and streamlining supply ordering workflows for operations across an estimated 15,000+ restaurants.',
      'Optimized end-to-end test suite efficiency using Cypress, reducing the automated testing scripts duration from 45 to 15 minutes, resulting in an estimated annual CI/CD pipeline cost savings of $10,000.',
    ]),
  },
  {
    role: 'Full Stack Engineer',
    type: ExperienceType.FULL_TIME_JOB,
    association: 'importgenius',
    intermediary: 'code-ninja',
    period: {
      start: createPeriod(2019, 'June'),
      end: createPeriod(2021, 'July'),
    },
    description: createUnorderedList([
      'Integrated Recurly into the platform via a seamless migration using automated data synchronization and API integrations, successfully modernizing subscriptions management and eliminating billing friction for over 2000 enterprise clients.',
      'Engineered a global trade intelligence software using Vue, Nuxt, Express, and Elasticsearch, delivering complex trade analytics and serving search queries under 300ms for enterprise users.',
    ]),
  },
  {
    role: 'Full Stack Engineering Intern',
    type: ExperienceType.INTERNSHIP,
    association: 'importgenius',
    intermediary: 'code-ninja',
    period: {
      start: createPeriod(2018, 'September'),
      end: createPeriod(2018, 'December'),
    },
    description: createUnorderedList(['Engineered a global trade intelligence software using Vue, Nuxt, Express, and Elasticsearch, delivering complex trade analytics and serving search queries under 300ms for enterprise users.']),
  },
  {
    role: 'Graphic Designer / Web Developer Intern',
    type: ExperienceType.INTERNSHIP,
    association: 'keywest-internationale',
    period: {
      start: createPeriod(2018, 'April'),
      end: createPeriod(2018, 'July'),
    },
    description: createUnorderedList(['Managed the corporate WordPress platform and product database while independently driving visual brand identity through the design of digital promotional banners and large-scale physical vehicle wraps.']),
  },
  {
    role: 'Bachelor of Science in Information Technology | GPA: 2.65',
    type: ExperienceType.STUDIES,
    association: 'feu-tech',
    period: {
      start: createPeriod(2014, 'July'),
      end: createPeriod(2019, 'March'),
    },
    description: createUnorderedList(['Led the development of a custom CMS for a hybrid animation film, winning four awards including Best Thesis and Best Website.']),
  },
])
