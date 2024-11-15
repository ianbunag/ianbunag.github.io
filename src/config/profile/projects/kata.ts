import {
  PARAGRAPH_SPACER,
  createHeader,
  createImage,
  createParagraph,
  createUnorderedList,
  requireProgressiveImage,
} from '~/lib/config'
import {
  LinkName,
  ReferencedProject,
  mapReferencedProjects,
} from '~/lib/config/profile/projects'
import { createPeriod } from '~/lib/config/profile'

const CODEWARS_USERNAME = process.env.CODEWARS_USERNAME
const LEETCODE_USERNAME = process.env.LEETCODE_USERNAME
export const kata = mapReferencedProjects([
  ((): ReferencedProject => {
    const description = createParagraph([
      createUnorderedList([
        'Participated in coding challenges covering array manipulation, string algorithms, and tree traversal using Go, employing systematic problem-solving approach, broadening expertise in fundamental data structures.',
        'Enhanced understanding of concepts such as trees, dynamic programming, and time/space complexity optimizations through practical exercises on platforms like LeetCode and Codewars.',
      ]),
      PARAGRAPH_SPACER,
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
      period: createPeriod(2024, 'June'),
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
      secondaryLink: {
        text: LinkName.VIEW_SOURCE,
        link: process.env.GO_KATA_REPOSITORY,
        linkIcon: 'mdiGithub',
      },
    }
  })(),
  ((): ReferencedProject => {
    const description = createParagraph([
      createUnorderedList([
        'Participated in coding challenges covering array manipulation, string algorithms, and tree traversal using Java, employing systematic problem-solving approach, broadening expertise in fundamental data structures.',
        'Enhanced understanding of concepts such as trees, dynamic programming, and time/space complexity optimizations through practical exercises on platforms like LeetCode and Codewars.',
      ]),
      PARAGRAPH_SPACER,
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
      period: createPeriod(2023, 'May'),
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
      secondaryLink: {
        text: LinkName.VIEW_SOURCE,
        link: process.env.JAVA_KATA_REPOSITORY,
        linkIcon: 'mdiGithub',
      },
    }
  })(),
  {
    name: 'TypeScript Challenges',
    key: 'typescript-challenges',
    period: createPeriod(2021, 'October'),
    tags: ['TypeScript', 'Node.js Notebooks', 'kata', 'types', 'intellisense'],
    description: 'Participated in TypeScript coding challenges, addressing concepts like conditional typing and type-level arithmetic. Used TypeScript and Node.js Notebooks, engaging in community discussions to refine skills and discover best practices. Enhanced proficiency in TypeScript development for future projects.',
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
    period: createPeriod(2019, 'May'),
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
    description: 'Completed coding exercises on platforms such as Tutorialspoint and w3resource, strengthening Python proficiency and mastering concepts like data structures, design patterns, and regular expressions. Improved skills in searching and sorting algorithms, clean coding practices, and pattern matching for future projects.',
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
