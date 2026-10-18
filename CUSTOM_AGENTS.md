# CUSTOM_AGENTS.md

Instructions and architectural guidelines for AI agents working in this repository.

---

## Architecture Overview

This project is John Ian Buñag's personal portfolio built with **Nuxt.js 2** (Static Site Generation), **Vue 2 Composition API**, **Vuetify 2**, and **TypeScript**.

The codebase is **config-driven**:
- Almost all content updates (projects, skills, work history, education, about copy, social links, theme colors) are managed strictly through configuration files in [`src/config/`](src/config/).
- Modifying UI components in [`src/components/`](src/components/) or pages in [`src/pages/`](src/pages/) is rarely necessary for content changes.
- Strict TypeScript interfaces in [`types/config/`](types/config/) enforce compile-time schema validation across all configs.

---

## Docker Development Environment

All development and test commands must be executed within the local Docker container to avoid host environment and Node.js runtime discrepancies.

### Environment Characteristics
- **Service Name**: `app` (container name: `portfolio-dev`)
- **Base Image**: Alpine Linux 3.24 with Node.js 16 (`16.20.2-r0`) and Yarn
- **Isolated Volumes**: Native dependencies and build caches are stored in named Docker volumes (`runtime.node_modules`, `runtime..nuxt`, `runtime.public`).
- **Process Model**: The container runs `sleep infinity` on startup, allowing on-demand command execution via `docker compose exec`.

### Standard Commands

```sh
# Start background container
docker compose up -d

# Install dependencies (when adding packages or on first run)
docker compose exec app yarn install

# Start local development server (http://localhost:3000)
docker compose exec app yarn dev

# Run linting (JavaScript, Vue, and SCSS)
docker compose exec app yarn lint

# Run Vitest unit tests
docker compose exec app yarn test

# Generate static production build
docker compose exec app yarn generate

# Stop background container
docker compose down
```

---

## Making Changes to the Repository

### 1. Adding or Modifying Projects

Project entries are categorized across modules in [`src/config/profile/projects/`](src/config/profile/projects/) and exported through [`index.ts`](src/config/profile/projects/index.ts):
- [`web-applications.ts`](src/config/profile/projects/web-applications.ts): Web applications and full-stack platforms
- [`application-softwares.ts`](src/config/profile/projects/application-softwares.ts): Desktop applications and CLI tools
- [`coursework.ts`](src/config/profile/projects/coursework.ts): Academic projects, research papers, and lab reports
- [`kata.ts`](src/config/profile/projects/kata.ts): Coding challenges and practice repositories
- [`creative-media.ts`](src/config/profile/projects/creative-media.ts): 3D animation, media, and graphic design

#### Entry Structure
```typescript
import { createAccessibleLink, createUnorderedList, requireProgressiveImage } from '~/lib/config'
import { LinkName, mapReferencedProjects } from '~/lib/config/profile/projects'
import { createPeriod } from '~/lib/config/profile'

export const sampleProjects = mapReferencedProjects([
  {
    name: 'Project Title',
    key: 'project-slug', // Unique key used in query string (?selected=project-slug)
    period: createPeriod(2026, 'January'), // Or 'Present'
    tags: ['web', 'application', 'SSG'], // Controls category tab filter matching
    description: createUnorderedList([
      'Bullet point summarizing technical achievement.',
    ]),
    images: [
      './assets/images/projects/project-slug/screenshot.png',
    ].map(requireProgressiveImage),
    technologies: [
      'nuxt',       // Keys matching technologies in src/config/technologies.ts
      'typescript',
    ],
    featured: true, // Optional: if true, prioritized for the top 3 on homepage
    primaryLink: {  // Optional primary action button in modal
      text: LinkName.TRY_ME,
      link: 'https://...',
      linkIcon: 'mdiArrowTopRight', // Key from src/config/icons.ts
    },
    secondaryLink: { // Optional secondary action button in modal
      text: LinkName.VIEW_SOURCE,
      link: process.env.PROJECT_REPO || '',
      linkIcon: 'mdiGithub',
    },
  },
])
```

#### Assets & Formatting:
- **Screenshots**: Place images under [`src/assets/images/projects/<project-slug>/`](src/assets/images/projects/). Always wrap paths with `requireProgressiveImage`.
- **Text Formatting**: Use `createUnorderedList`, `createAccessibleLink`, or `createParagraph` from [`src/lib/config/index.ts`](src/lib/config/index.ts).
- **Category Filter Tabs**: Check [`src/lib/pages/projects.ts`](src/lib/pages/projects.ts) to verify what tags are required to match filter tabs (`web`, `application`, `software`, `kata`, `creative`, `media`, `coursework`).

---

### 2. Adding Icons (Pills & Placeholders)

The portfolio supports both Material Design Icons and custom SVGs. Custom icons display as white/monochrome pill buttons in project modals and as image loading placeholders.

#### A. Material Design Icons (MDI)
1. Check `@mdi/js` for the icon name (e.g. `mdiCloudOutline`).
2. Import it and add it to the `mdi` map in [`src/config/icons.ts`](src/config/icons.ts).

#### B. Custom SVG Icons
If an icon is not in `@mdi/js`:
1. Create a component in [`src/components/icons/<name>.vue`](src/components/icons/):
   ```html
   <script lang="ts">
   export default { name: 'IconCustomTech' }
   </script>
   
   <template>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-custom-tech">
       <path d="..." />
     </svg>
   </template>
   
   <style>
   .icon-custom-tech {
     fill: currentColor; /* Required: inherits light/white color in dark theme */
   }
   </style>
   ```
2. Export the component in [`src/components/icons/index.ts`](src/components/icons/index.ts).
3. Vuetify automatically plugs custom icons through [`src/plugins/vuetify.ts`](src/plugins/vuetify.ts) and registers them under `$iconName` in [`src/config/icons.ts`](src/config/icons.ts).

---

### 3. Adding Experience and Education

Both professional experience and academic credentials are configured in [`src/config/profile/experiences.ts`](src/config/profile/experiences.ts).

#### Step 1: Ensure Association Exists
Check [`src/config/associations.ts`](src/config/associations.ts). If the company or institution is missing:
```typescript
'association-key': {
  name: 'Institution or Company Name',
  url: process.env.ASSOCIATION_LINK,
  logoURL: 'logos/association-logo.png', // Placed in src/static/logos/
  logoAccent: '#e6a923', // Border color on logo hover
}
```

#### Step 2: Add Timeline Item
In [`src/config/profile/experiences.ts`](src/config/profile/experiences.ts):
```typescript
{
  role: 'Degree or Position Title',
  type: ExperienceType.STUDIES, // Distinguishes timeline badge icon
  association: 'sjsu',          // Key from associations.ts
  intermediary: 'inform-group', // Optional: agency or contracting intermediary
  period: {
    start: createPeriod(2026, 'January'),
    end: createPeriod(2028, 'May'), // Omit for current roles ("Present")
  },
  description: createUnorderedList([
    'Key achievements, duties, or coursework summary.',
  ]),
}
```

#### Experience Types:
- `ExperienceType.STUDIES`: Renders `mdiSchool` graduation badge (Education).
- `ExperienceType.FULL_TIME_JOB`: Renders `mdiBriefcaseVariant` briefcase badge (Work).
- `ExperienceType.INTERNSHIP`: Renders `mdiNotebookEdit` notebook badge (Internship).

Duration strings and date ranges are calculated automatically by [`src/components/experience/period.ts`](src/components/experience/period.ts).

---

### 4. Updating the About Section

The About section consists of two parts:

#### A. Text Narrative
Located in [`src/config/profile/introduction.ts`](src/config/profile/introduction.ts):
- `constant`: Static string used by [`nuxt.config/head.ts`](nuxt.config/head.ts) for `<meta name="description">` (SEO and social sharing cards).
- `dynamic()`: Function returning the text displayed on the homepage under the About section header.

> Always update both `constant` and `dynamic()` to keep page copy and search metadata aligned.

#### B. Pillar Capability Cards
Located in [`src/config/profile/skills.ts`](src/config/profile/skills.ts):
Controls the three overview cards displayed directly below the narrative text (e.g., Front-End, Back-End, DevOps) with associated technology pill icons.

---

### 5. Adding Technical Skills

The Technical Skills page ([`/technical-skills/`](src/pages/technical-skills.vue)) displays a colored logo that falls back to a monochrome SVG icon while loading.

#### Steps to Add a Technology:
1. **Colored Logo**: Place `<tech>.svg` into [`src/static/logos/`](src/static/logos/). (Served at root `/logos/<tech>.svg`).
2. **Monochrome Placeholder Icon**: Ensure an MDI icon or custom SVG component exists in [`src/config/icons.ts`](src/config/icons.ts).
3. **Register Technology**: In [`src/config/technologies.ts`](src/config/technologies.ts):
   ```typescript
   'my-tech': {
     display: 'Display Name',
     description: 'One-line summary description.',
     icon: 'mdiMyTech' || 'myCustomIcon', // Monochrome placeholder & pill icon
     logoURL: 'logos/my-tech.svg',         // Colored SVG logo
     url: 'https://...',
   }
   ```
4. **Assign Category**: In [`src/config/profile/tech-stacks.ts`](src/config/profile/tech-stacks.ts), add `'my-tech'` to the appropriate category array (`Languages`, `AI Tools`, `Technologies`, `Databases`, `Cloud`, `DevOps`, `Methodologies`).

---

### 6. Adding Social / Online Links

Social links in the footer contact section are configured in [`src/config/profile/links.ts`](src/config/profile/links.ts):
```typescript
export const links = mapReferencedLinks([
  {
    name: 'GitHub',
    icon: 'mdiGithub',
    url: process.env.GITHUB_LINK || '',
  },
  {
    name: 'Bluesky',
    icon: 'bluesky',
    url: process.env.BLUESKY_LINK || '',
  },
])
```

---

### 7. Environment Variables & Client-Side Whitelisting

Because Nuxt statically compiles the client application:
1. Define any new link or secret in `.env` and [`.env.dist`](.env.dist).
2. **Crucial**: Whitelist the variable in [`nuxt.config/env.ts`](nuxt.config/env.ts) inside `pick(process.env, [...])`. Variables not explicitly whitelisted will be undefined at runtime on the client.
3. Reference the variable in configs via `process.env.VARIABLE_NAME`.

---

### 8. Additional Configurable Systems

- **Profile Identity & Hero Typer**: [`src/config/profile/index.ts`](src/config/profile/index.ts) (`name`, `tag` handle, `titles` typewriter array, `email`).
- **Theme Palette**: [`src/config/theme.json`](src/config/theme.json) (`primary`, `secondary`, `accent`, and background gradient tones).
- **Navigation Routes**: [`src/config/pages.ts`](src/config/pages.ts) (page names, routes, and navbar icons).
- **Document Head, CSP & SEO**: [`nuxt.config/head.ts`](nuxt.config/head.ts) (page title template chunk, meta descriptions, OpenGraph image, CSP headers).
- **Brand Logos**: [`src/components/branding/logo/solid.vue`](src/components/branding/logo/solid.vue) (homepage geometric mark) and [`icon.vue`](src/components/branding/logo/icon.vue) (app bar logo).

---

## Agent Verification Checklist

Before completing any changes:
1. Run `docker compose exec app yarn lint` to ensure ESLint, TypeScript, and Stylelint rules pass.
2. Run `docker compose exec app yarn test` to verify Vitest test suites pass.
3. If new images or static assets were added, verify their paths match progressive image loader rules and static URL mappings.
