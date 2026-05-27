import { createUnorderedList, requireProgressiveImage } from '~/lib/config'
import { LinkName, mapReferencedProjects } from '~/lib/config/profile/projects'
import { createPeriod } from '~/lib/config/profile'

export const coursework = mapReferencedProjects([
  {
    name: 'Enterprise Software Platforms - Online Marketplace',
    key: 'cmpe-272-online-marketplace',
    period: createPeriod(2026, 'May'),
    tags: [
      'sjsu',
      'web',
      'application',
      'fullstack',
      'php',
      'docker',
      'mysql',
      'rest-api',
      'cloud',
    ],
    description: createUnorderedList([
      'A multi-vendor online marketplace built for the CMPE-272 enterprise software platforms course, allowing users to register, browse products, leave ratings and reviews, and track visits across participating vendor companies. The platform features Firebase-based authentication, APCu server-side caching, a RESTful API, and automated CI/CD deployment to a GCP VM via GitHub Actions.',
      'Built by:',
      [
        'Brandon Rivera',
        'Mulugeta Girmay',
        'John Ian Buñag',
      ],
    ]),
    images: [
      './assets/images/projects/cmpe-272-online-marketplace/landing-page.png',
      './assets/images/projects/cmpe-272-online-marketplace/products-page.png',
      './assets/images/projects/cmpe-272-online-marketplace/product-page.png',
    ].map(requireProgressiveImage),
    technologies: [
      'claude',
      'github-copilot',
      'php',
      'mysql',
      'nginx',
      'docker',
      'google-cloud',
      'davinci-resolve',
      'photopea',
    ],
    primaryLink: {
      text: LinkName.VIEW_SOURCE,
      link: process.env.CMPE_272_ONLINE_MARKETPLACE_REPO_LINK,
      linkIcon: 'mdiGithub',
    },
    secondaryLink: {
      text: LinkName.WATCH_ME,
      link: process.env.CMPE_272_ONLINE_MARKETPLACE_VIDEO_LINK,
      linkIcon: 'mdiYoutube',
    },
  },
])
