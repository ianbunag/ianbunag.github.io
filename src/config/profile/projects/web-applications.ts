import {
  createAccessibleLink,
  createParagraph,
  createUnorderedList,
  emphasize,
  requireProgressiveImage,
} from '~/lib/config'
import { LinkName, mapReferencedProjects } from '~/lib/config/profile/projects'
import { getProjectLink } from '~/lib/pages/projects'

import type { ReferencedProject } from '~/lib/config/profile/projects'

export const webApplications = mapReferencedProjects([
  {
    name: 'Personal Portfolio',
    key: 'personal-portfolio',
    period: '2021 September',
    tags: [
      'SSG',
      'SEO',
      'TypeScript',
      'Vue',
      'Composition API',
      'web',
      'application',
      'static',
      'responsive',
      'accessible',
      'portfolio',
    ],
    description: createUnorderedList(['Developed a personal portfolio using Nuxt.js with beta support for Vue.js next-generation Composition API. Designed for optimal performance with fast page load times, responsive layouts, and modular configuration.']),
    images: [
      './assets/images/projects/personal-portfolio/introduction-section.png',
      './assets/images/projects/personal-portfolio/mobile-introduction-section.jpg',
      './assets/images/projects/personal-portfolio/mobile-about-section.jpg',
      './assets/images/projects/personal-portfolio/mobile-projects-section.jpg',
      './assets/images/projects/personal-portfolio/mobile-experience-section.jpg',
      './assets/images/projects/personal-portfolio/mobile-contact-section.jpg',
      './assets/images/projects/personal-portfolio/mobile-tech-stack-page.jpg',
      './assets/images/projects/personal-portfolio/mobile-projects-page.jpg',
    ].map(requireProgressiveImage),
    technologies: [
      'nuxt',
      'vue',
      'vuetify',
      'typescript',
      'sass',
      'eslint',
      'stylelint',
      'photopea',
      'gitlab',
    ],
    secondaryLink: {
      text: LinkName.VIEW_SOURCE,
      link: process.env.PORTFOLIO_REPOSITORY,
      linkIcon: 'mdiGitlab',
    },
  },
  ((): ReferencedProject => {
    const dockLink = createAccessibleLink(
      '@yvnbunag/dock',
      getProjectLink('yvnbunag-dock'),
    )

    return {
      name: 'Library System',
      key: 'library-system',
      period: '2019 February',
      tags: [
        'SSR',
        'SPA',
        'CMS',
        'web',
        'application',
        '@yvnbunag/dock',
        'library',
        'system',
        'university',
      ],
      description: `University project turned proof-of-concept for ${dockLink}. Features resource borrowing, resource management and email notification.`,
      images: [
        './assets/images/projects/library-system/printed-resources.jpg',
        './assets/images/projects/library-system/login-page.jpg',
        './assets/images/projects/library-system/home-page.jpg',
        './assets/images/projects/library-system/borrow-queue.jpg',
        './assets/images/projects/library-system/borrow-history.jpg',
        './assets/images/projects/library-system/digital-items.jpg',
        './assets/images/projects/library-system/resource-management.jpg',
        './assets/images/projects/library-system/borrow-management.jpg',
      ].map(requireProgressiveImage),
      technologies: [
        'nuxt',
        'vue',
        'bootstrap',
        'css',
        'express',
        'mysql',
        'nginx',
        'docker',
        'yvnbunag-dock',
        'gitlab',
      ],
      secondaryLink: {
        text: LinkName.VIEW_SOURCE,
        link: process.env.LIBRARY_SYSTEM_REPOSITORY,
        linkIcon: 'mdiGitlab',
      },
    }
  })(),
  ((): ReferencedProject => {
    const onesimoFoundation = createAccessibleLink(
      'Onesimo Foundation Inc.',
      process.env.ONESIMO_FOUNDATION_LINK || '',
    )
    const awards = createUnorderedList([
      'Best Thesis',
      'Best Website',
      'Best Film',
      'Best Trailer',
    ])
    const members = createUnorderedList([
      'Rosette Andrea Ceriola (Project Manager, Graphics Designer)',
      'Christian Josef Luntok (Hybrid Animator, Character Designer)',
      'Miguel Jehiel Ang (Script Writer, Assistant 3D Animator)',
      'John Ian Buñag (Web Developer, Assistant 2D Animator)',
    ])
    const description = createParagraph([
      `University capstone project by La Prisma Group from Bachelor of Science in Information Technology Major in Digital Arts Thesis Batch 15. A promotional website for ${onesimoFoundation} with a hybrid animation film and data, user and content management system.`,
      `${emphasize('Awards')}${awards}`,
      `${emphasize('Members')}${members}`,
    ])

    return {
      name: 'Change: A Hybrid Animation Film in a Database-Driven Website',
      key: 'change-hybrid-animation-database-driven-website',
      period: '2018 February',
      tags: [
        'CMS',
        'web',
        'application',
        '3D',
        '2D',
        'animation',
        'design',
        'capstone',
        'thesis',
        'awards',
        'university',
      ],
      description,
      images: [
        './assets/images/projects/change-onesimo-foundation-inc/web-page.jpg',
        './assets/images/projects/change-onesimo-foundation-inc/poster.jpg',
      ].map(requireProgressiveImage),
      technologies: [
        'php',
        'html',
        'javascript',
        'css',
        'mysql',
        'xampp',
        'autodesk-maya',
        'adobe-photoshop',
        'adobe-illustrator',
        'adobe-premier-pro',
        'adobe-after-effects',
        'adobe-audition',
      ],
      secondaryLink: {
        text: 'Watch trailer',
        link: process.env.ONESIMO_FOUNDATION_CHANGE_TRAILER_LINK,
        linkIcon: 'mdiYoutube',
      },
      primaryLink: {
        text: 'Watch film',
        link: process.env.ONESIMO_FOUNDATION_CHANGE_FILM_LINK,
        linkIcon: 'mdiYoutube',
      },
    }
  })(),
  {
    name: 'Optimus I.T. Solutions',
    key: 'optimus-it-solutions',
    period: '2018 April',
    tags: [
      'web',
      'application',
      'spreadsheet',
      'ajax',
      'freelance',
    ],
    description: 'Tabular resource management application with an inline editing interface and asynchronous data sync.',
    images: [requireProgressiveImage('./assets/images/projects/optimus-it-solutions/database.png')],
    technologies: [
      'php',
      'html',
      'javascript',
      'css',
      'mysql',
      'xampp',
    ],
  },
  {
    name: 'CPU Scheduling Simulator',
    key: 'cpu-scheduling-simulator',
    period: '2017 October',
    tags: [
      'CPU',
      'web',
      'application',
      'simulation',
      'gantt',
      'chart',
      'university',
    ],
    description: 'Application to simulate CPU scheduling algorithms with summary and gantt chart report.',
    images: [
      './assets/images/projects/cpu-scheduling-simulator/initial.png',
      './assets/images/projects/cpu-scheduling-simulator/first-come-first-serve-prepared.png',
      './assets/images/projects/cpu-scheduling-simulator/first-come-first-serve-running.png',
      './assets/images/projects/cpu-scheduling-simulator/first-come-first-serve-done.png',
      './assets/images/projects/cpu-scheduling-simulator/shortest-job-first-prepared.png',
      './assets/images/projects/cpu-scheduling-simulator/shortest-job-first-done.png',
      './assets/images/projects/cpu-scheduling-simulator/priority-prepared.png',
      './assets/images/projects/cpu-scheduling-simulator/priority-done.png',
    ].map(requireProgressiveImage),
    technologies: [
      'html',
      'javascript',
      'css',
    ],
    secondaryLink: {
      text: LinkName.VIEW_SOURCE,
      link: process.env.CPU_SCHEDULING_SIMULATOR_REPOSITORY,
      linkIcon: 'mdiGitlab',
    },
    primaryLink: {
      text: LinkName.TRY_ME,
      link: process.env.CPU_SCHEDULING_SIMULATOR_URL,
      linkIcon: 'mdiWeb',
    },
  },
  ((): ReferencedProject => {
    const casaBurgos = createAccessibleLink(
      'Casa Burgos',
      process.env.CASA_BURGOS_LINK || '',
    )
    const features = createUnorderedList([
      'File based content management',
      'Content editing interface',
      'Content back up',
      'Mobile view emulator',
    ])

    return {
      name: 'Creative Events by Casa Burgos',
      key: 'creative-events-casa-burgos',
      period: '2017 October',
      tags: [
        'CMS',
        'web',
        'application',
        'responsive',
        'freelance',
      ],
      description: `Promotional website for ${casaBurgos}, featuring: ${features}`,
      images: [requireProgressiveImage('./assets/images/projects/creative-events-by-casa-burgos/landing-section.jpg')],
      technologies: [
        'php',
        'html',
        'javascript',
        'css',
      ],
    }
  })(),
])
