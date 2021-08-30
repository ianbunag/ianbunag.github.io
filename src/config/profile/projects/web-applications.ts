import {
  requireProgressiveImage,
  createAccessibleLink,
  createParagraph,
  createUnorderedList,
  emphasize,
  LinkName,
} from '~/config/profile/projects/module'

import type {
  ProfileProject,
  ProfileProjects,
} from '~/config/profile/projects/module'

export const webApplications: ProfileProjects = [
  {
    name: 'Personal Portfolio',
    period: 'August 2021',
    tags: [
      'TypeScript',
      'SSG',
      'Vue',
      'Composition API',
      'web',
      'application',
      'static',
      'responsive',
      'accessible',
      'portfolio',
    ],
    description: `My personal portfolio, exploring Vue's next-generation Composition API supercharged by TypeScript. Modular, responsive and performant.`,
    images: ['./assets/images/projects/personal-portfolio/introduction-section.png'].map(requireProgressiveImage),
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
    featured: true,
    secondaryLink: {
      text: LinkName.VIEW_SOURCE,
      icon: 'mdiGitlab',
      link: process.env.PORTFOLIO_REPOSITORY,
    },
  },
  ((): ProfileProject => {
    const dockLink = createAccessibleLink(
      '@yvnbunag/dock',
      process.env.DOCK_NPM_URL || '',
    )

    return {
      name: 'Library System',
      period: 'February 2019',
      tags: [
        'SSR',
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
        './assets/images/projects/library-system/printed-resources.png',
        './assets/images/projects/library-system/login-page.png',
        './assets/images/projects/library-system/home-page.png',
        './assets/images/projects/library-system/borrow-queue.png',
        './assets/images/projects/library-system/borrow-history.png',
        './assets/images/projects/library-system/digital-items.png',
        './assets/images/projects/library-system/resource-management.png',
        './assets/images/projects/library-system/borrow-management.png',
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
      featured: true,
      secondaryLink: {
        text: LinkName.VIEW_SOURCE,
        icon: 'mdiGitlab',
        link: process.env.LIBRARY_SYSTEM_REPOSITORY,
      },
      primaryLink: {
        text: LinkName.TRY_ME,
        icon: 'mdiWeb',
        link: process.env.LIBRARY_SYSTEM_URL,
      },
    }
  })(),
  ((): ProfileProject => {
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
      name: 'Change - Onesimo Foundation Inc.',
      period: 'February 2018',
      tags: [
        'CMS',
        'web',
        'application',
        'hybrid',
        'animation',
        'capstone',
        'thesis',
        'awards',
        'university',
      ],
      description,
      images: [
        './assets/images/projects/change-onesimo-foundation-inc/web-page.png',
        './assets/images/projects/change-onesimo-foundation-inc/poster.png',
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
      featured: true,
      secondaryLink: {
        text: 'Watch trailer',
        icon: 'mdiYoutube',
        link: process.env.ONESIMO_FOUNDATION_CHANGE_TRAILER_LINK,
      },
      primaryLink: {
        text: 'Watch film',
        icon: 'mdiYoutube',
        link: process.env.ONESIMO_FOUNDATION_CHANGE_FILM_LINK,
      },
    }
  })(),
  {
    name: 'Optimus I.T. Solutions',
    period: 'April 2018',
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
    period: 'October 2017',
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
      icon: 'mdiGitlab',
      link: process.env.CPU_SCHEDULING_SIMULATOR_REPOSITORY,
    },
    primaryLink: {
      text: LinkName.TRY_ME,
      icon: 'mdiWeb',
      link: process.env.CPU_SCHEDULING_SIMULATOR_URL,
    },
  },
  ((): ProfileProject => {
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
      period: 'October 2017',
      tags: [
        'CMS',
        'web',
        'application',
        'responsive',
        'freelance',
      ],
      description: `Promotional website for ${casaBurgos}, featuring: ${features}`,
      images: [requireProgressiveImage('./assets/images/projects/creative-events-by-casa-burgos/landing-section.png')],
      technologies: [
        'php',
        'html',
        'javascript',
        'css',
      ],
    }
  })(),
]
