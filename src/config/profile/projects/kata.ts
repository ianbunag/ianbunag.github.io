import {
  createHeader,
  createImage,
  createParagraph,
  requireProgressiveImage,
} from '~/lib/config'
import {
  LinkName,
  ReferencedProject,
  mapReferencedProjects,
} from '~/lib/config/profile/projects'

const CODEWARS_USERNAME = process.env.CODEWARS_USERNAME
const LEETCODE_USERNAME = process.env.LEETCODE_USERNAME
export const kata = mapReferencedProjects([
  ((): ReferencedProject => {
    const description = createParagraph([
      'Collection of Java kata challenges.',
      createHeader(2, 'Find me in LeetCode'),
      createImage(
        `https://leetcode-stats-six.vercel.app/?username=${LEETCODE_USERNAME}`,
        `Find ${LEETCODE_USERNAME} in LeetCode`,
        { link: `https://leetcode.com/${LEETCODE_USERNAME}`, height: 125 },
      ),
      createHeader(2, 'Find me in Codewars'),
      createImage(
        `https://www.codewars.com/users/${CODEWARS_USERNAME}/badges/small`,
        `Find ${CODEWARS_USERNAME} in Codewars`,
        {
          link: `https://www.codewars.com/users/${CODEWARS_USERNAME}`,
          height: 20,
        },
      ),
    ])

    return {
      name: 'Java Kata',
      key: 'java-kata',
      period: '2023 May',
      tags: [
        'Java',
        'LeetCode',
        'Codewars',
        'TDD',
        'Big O',
        'kata',
        'data',
        'structures',
        'algorithm',
      ],
      description,
      images: ['./assets/images/projects/java-kata/java-kata.png'].map(
        requireProgressiveImage,
      ),
      technologies: ['java', 'leetcode', 'codewars'],
      featured: true,
      secondaryLink: {
        text: LinkName.VIEW_SOURCE,
        link: process.env.JAVA_KATA_REPOSITORY,
        linkIcon: 'mdiGithub',
      },
    }
  })(),
  ((): ReferencedProject => {
    const description = createParagraph([
      'Collection of Go kata challenges.',
      createHeader(2, 'Find me in LeetCode'),
      createImage(
        `https://leetcode-stats-six.vercel.app/?username=${LEETCODE_USERNAME}`,
        `Find ${LEETCODE_USERNAME} in LeetCode`,
        { link: `https://leetcode.com/${LEETCODE_USERNAME}`, height: 125 },
      ),
      createHeader(2, 'Find me in Codewars'),
      createImage(
        `https://www.codewars.com/users/${CODEWARS_USERNAME}/badges/small`,
        `Find ${CODEWARS_USERNAME} in Codewars`,
        {
          link: `https://www.codewars.com/users/${CODEWARS_USERNAME}`,
          height: 20,
        },
      ),
    ])

    return {
      name: 'Go Kata',
      key: 'go-kata',
      period: '2023 May',
      tags: [
        'Go',
        'LeetCode',
        'Codewars',
        'TDD',
        'Big O',
        'kata',
        'data',
        'structures',
        'algorithm',
      ],
      description,
      images: ['./assets/images/projects/go-kata/go-kata.png'].map(
        requireProgressiveImage,
      ),
      technologies: ['go', 'leetcode', 'codewars'],
      featured: true,
      secondaryLink: {
        text: LinkName.VIEW_SOURCE,
        link: process.env.GO_KATA_REPOSITORY,
        linkIcon: 'mdiGithub',
      },
    }
  })(),
  {
    name: 'TypeScript Challenges',
    key: 'typescript-challenges',
    period: '2021 October',
    tags: ['TypeScript', 'Node.js Notebooks', 'kata', 'types', 'intellisense'],
    description:
      'Collection of TypeScript type challenges for practice with Node.js Notebooks.',
    images: [
      './assets/images/projects/typescript-challenges/readme.png',
      './assets/images/projects/typescript-challenges/initial.png',
      './assets/images/projects/typescript-challenges/half-solved.png',
      './assets/images/projects/typescript-challenges/solved.png',
    ].map(requireProgressiveImage),
    technologies: ['typescript', 'node-js', 'vs-code'],
    secondaryLink: {
      text: LinkName.VIEW_SOURCE,
      link: process.env.TYPESCRIPT_CHALLENGES_REPOSITORY,
      linkIcon: 'mdiGitlab',
    },
  },
  {
    name: 'Python Challenges',
    key: 'python-challenges',
    period: '2019 May',
    tags: [
      'Python',
      'kata',
      'data',
      'structures',
      'regular',
      `expressions`,
      'design',
      'patterns',
    ],
    description:
      'Collection of various coding challenge answers - exploring python basics, data structures, regular expressions and design patterns.',
    images: [
      './assets/images/projects/python-challenges/root.png',
      './assets/images/projects/python-challenges/navigation.png',
      './assets/images/projects/python-challenges/design-pattern-directory.png',
      './assets/images/projects/python-challenges/design-pattern-challenge.png',
      './assets/images/projects/python-challenges/data-structure-directory.png',
      './assets/images/projects/python-challenges/data-structure-challenge.png',
    ].map(requireProgressiveImage),
    technologies: ['python'],
    secondaryLink: {
      text: LinkName.VIEW_SOURCE,
      link: process.env.PYTHON_CHALLENGES_REPOSITORY,
      linkIcon: 'mdiGitlab',
    },
  },
])
