import { icons } from '~/config/icons'

import type { Link, Links } from '@/config/profile'

type ReferencedLink = Override<Link, { icon: keyof typeof icons }>
type ReferencedLinks = Array<ReferencedLink>

function mapReferencedLinks (referencedLinks: ReferencedLinks): Links {
  return referencedLinks.map((referencedLink) => {
    const { icon, ...link } = referencedLink

    return {
      ...link,
      icon: icons[icon],
    }
  })
}

export const links = mapReferencedLinks([
  {
    name: 'GitLab',
    icon: 'mdiGitlab',
    url: process.env.GITLAB_LINK || '',
  },
  {
    name: 'LinkedIn',
    icon: 'mdiLinkedin',
    url: process.env.LINKEDIN_LINK || '',
  },
  {
    name: 'Twitter',
    icon: 'mdiTwitter',
    url: process.env.TWITTER_LINK || '',
  },
  {
    name: 'Docker Hub',
    icon: 'mdiDocker',
    url: process.env.DOCKER_HUB_LINK || '',
  },
  {
    name: 'NPM',
    icon: 'mdiNpm',
    url: process.env.NPM_LINK || '',
  },
])
