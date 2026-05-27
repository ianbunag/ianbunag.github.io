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
  {
    name: 'Computer Network Design - TCP vs UDP Performance Comparison',
    key: 'cmpe-206-tcp-vs-udp-comparison',
    period: createPeriod(2026, 'May'),
    tags: [
      'sjsu',
      'simulation',
      'networking',
      'c++',
      'research',
      'cli',
      'analysis',
    ],
    description: createUnorderedList([
      'A graduate research project for the CMPE-206 computer network design course comparing TCP and UDP transport-layer protocol performance using the ns-3 discrete-event network simulator. Three experiments were conducted across dumbbell topologies - varying router buffer size, link latency (with a 0.0001% bit error rate), and TCP/UDP flow ratios - measuring throughput, mean delay, packet loss, retransmissions, duplicate ACKs, and Jain\'s Fairness Index.',
      'Built by:',
      [
        'Bhimsen Thapa Chhetri',
        'John Ian Buñag',
      ],
    ]),
    images: [
      './assets/images/projects/cmpe-206-tcp-vs-udp-comparison/paper.png',
      './assets/images/projects/cmpe-206-tcp-vs-udp-comparison/buffer-simulation-mixed.png',
      './assets/images/projects/cmpe-206-tcp-vs-udp-comparison/latency-simulation-mixed.png',
      './assets/images/projects/cmpe-206-tcp-vs-udp-comparison/class-imbalance-simulation.png',
    ].map(requireProgressiveImage),
    technologies: [
      'c++',
      'ns-3',
      'wireshark',
    ],
    primaryLink: {
      text: LinkName.VIEW_SOURCE,
      link: process.env.CMPE_206_TCP_VS_UDP_REPO_LINK,
      linkIcon: 'mdiGithub',
    },
    secondaryLink: {
      text: LinkName.READ_PAPER,
      link: process.env.CMPE_206_TCP_VS_UDP_PAPER_LINK,
      linkIcon: 'mdiFilePdfBox',
    },
  },
])
