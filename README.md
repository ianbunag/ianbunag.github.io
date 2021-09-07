# Personal Portfolio

[![license](https://img.shields.io/npm/l/@yvnbunag/dock)](https://gitlab.com/yvnbunag/dock/-/blob/master/LICENSE)
[![Continuous Delivery](https://img.shields.io/badge/dynamic/json?color=informational&label=%E2%9A%99%20CD&query=%24%5B0%5D.status&url=https%3A%2F%2Fgitlab.com%2Fapi%2Fv4%2Fprojects%2F28935241%2Fpipelines%3Fscope%3Dtags%26per_page%3D1)](https://gitlab.com/yvnbunag/yvnbunag.gitlab.io/-/pipelines?page=1&scope=tags)

John Ian Buñag's personal portfolio. Made with [Nuxt.js](https://nuxtjs.org/),
[Vuetify](https://vuetifyjs.com/en/) and
[TypeScript](https://www.typescriptlang.org/).

[See it live!](https://yvnbunag.gitlab.io/)

<br/>

<!-- omit in toc -->
## Contents
- [Requirements](#requirements)
- [Preparation](#preparation)
- [Development](#development)
- [Build](#build)
- [Configuration](#configuration)
  - [Profile](#profile)
  - [Colors](#colors)
  - [Environment Variables](#environment-variables)
  - [GitLab CI/CD Variables](#gitlab-cicd-variables)
- [Special Thanks](#special-thanks)
  - [For the layout and design inspiration](#for-the-layout-and-design-inspiration)
  - [For the free software](#for-the-free-software)
  - [For the free assets](#for-the-free-assets)

<br/>

---

## Requirements

1. [Node](https://nodejs.org/en/) version 16.5.0 or higher

<br/>

---

## Preparation

1. Install dependencies
```sh
yarn install
```

2. Copy `.env.dist` to `.env` and populate missing values
```sh
cp .env.dist .env
```

<br/>

---

## Development

1. Start the development server
```sh
yarn dev
```

<br/>

---

## Build

1. Generate static build
```sh
yarn generate
```

2. Start static server
```sh
yarn start
```

<br/>

---

## Configuration

### Profile

See [src/config/profile](src/config/profile/index.ts).

<br/>

### Colors

Theme colors are centralized in [src/config/theme.json](src/config/theme.json)
and is configured to be consumable via JavaScript and SCSS.

#### Theme Palette

Primary color is from my personal brand palette.  
Secondary and accent colors are generated from
[Coolors](https://coolors.co/46748a-795663-a2d6f9) to match background theme.  
Alert colors are Vuetify defaults. See
[src/plugins/vuetify.ts](src/plugins/vuetify.ts).

|                                                                 	| Role      	| Key       	| Name         	| Hex Code 	|
|-----------------------------------------------------------------	|-----------	|-----------	|--------------	|----------	|
| ![#46748A](https://via.placeholder.com/15/46748A/000000?text=+) 	| Primary   	| primary   	| Teal Blue    	| #46748A  	|
| ![#795663](https://via.placeholder.com/15/795663/000000?text=+) 	| Secondary 	| secondary 	| Deep Taupe   	| #795663  	|
| ![#a2d6f9](https://via.placeholder.com/15/a2d6f9/000000?text=+) 	| Accent    	| accent    	| Uranian Blue 	| #a2d6f9  	|

#### Background Scheme

All background colors are picked from a
[Visme blog post](https://visme.co/blog/website-color-schemes/#:~:text=Corporate%20and%20Traditional),
from the [Swiss Army Man Official Movie Site](https://swissarmyman.com/).

|                                                                 	| Role    	| Key                	| Name                       	| Hex Code 	|
|-----------------------------------------------------------------	|---------	|--------------------	|----------------------------	|----------	|
| ![#112d32](https://via.placeholder.com/15/112d32/000000?text=+) 	| Darker  	| background-darker  	| Outer Space Crayola        	| #112d32  	|
| ![#254e58](https://via.placeholder.com/15/254e58/000000?text=+) 	| Dark    	| background-dark    	| Midnight Green Eagle Green 	| #254e58  	|
| ![#4f4a41](https://via.placeholder.com/15/4f4a41/000000?text=+) 	| Median  	| background-median  	| Davys Grey                 	| #4f4a41  	|
| ![#6e6658](https://via.placeholder.com/15/6e6658/000000?text=+) 	| Light   	| background-light   	| Dim Gray                   	| #6e6658  	|
| ![#88bdbc](https://via.placeholder.com/15/88bdbc/000000?text=+) 	| Lighter 	| background-lighter 	| Opal                       	| #88bdbc  	|

<br/>

### Environment Variables

Listed are the important build variables.

#### HOST
- Host where the app will be served
- **Required**, set to localhost for local package generation
- Used for generating root sitemap (`sitemap.xml`) in build package root
- Protocol must be prefixed (`http://` or `https://`)
- `localhost` value gets automatically mapped to `http://127.0.0.1`
- If serving on a specific port, it should be defined in `PORT` variable

#### EXTRA_HOSTS
- Used for generating sitemaps for additional subdomains, e.g.
  `https://www.domain.com`
- **Optional**, leave blank if not needed
- Separate each entry with a comma (`,`)
- Protocol must be prefixed (`http://` or `https://`)
- If serving on a specific port, include suffix, e.g.
  `https://www.domain.com:3000`

#### PORT
- Port where the app will be served
- **Optional**, leave blank if not needed

#### BASE
- Base URL of the app
- **Optional**, leave blank if not needed
  - Defaults to `/`
- Used when serving the app under a different context root
  - e.g. a non root project in GitLab pages with format
    `https://namespace.gitlab.io/project-name`

#### GOOGLE_SITE_VERIFICATION
- Used to verify domain ownership in
  [Google Search Console](https://search.google.com/search-console/)
- Injects `google-site-verification` metadata header with provided value
- **Optional**, leave blank if not needed

<br/>

### GitLab CI/CD Variables

Listed are the variables used during CI/CD, consumed in
[.gitlab-ci.yml](.gitlab-ci.yml).

#### CI_GIT_EMAIL
- Email to use when pushing bumped up package version to main branch
- Example is `runner@gitlab.example.org`
#### CI_GIT_USERNAME
- Username to use when pushing bumped up package version to main branch
- Example is `Portfolio CI/CD Runner`

#### ENV
- Environment variable file to be used during CD build
- Should be of type `File`

#### GITLAB_ACCESS_TOKEN
- Access token to use to authorize pushing of bumped up package version to main
  branch from CI/CD
- Current token used is a
  [Personal Access Token](https://gitlab.com/-/profile/personal_access_tokens),
  with scopes `api` and `read_user`

#### GSC_VERIFICATION_MAP
- Used for including
  [Google Search Console](https://search.google.com/search-console/)
  verification files in build package
- Should be of type `File`
- Entry format is `<environment-file-reference><space><file-name>`
- Where `<environment-file-reference>` is:
  - An environment variable of type `File`
  - With content provided by
    [Google Search Console](https://search.google.com/search-console/)
- Entries should be delimited by newline
- Use case:
  - Given the following entries:
  ```
  GSC_GITLAB_PERSONAL_EMAIL_VERIFICATION googlexvcpiixa6r3s77mr.html
  GSC_GITLAB_WORK_EMAIL_VERIFICATION googlesd46813r5g2wp6t3.html
  ```
  - Then the following environment (file) variables should be configured:
    - GSC_GITLAB_PERSONAL_EMAIL_VERIFICATION
    ```
    google-site-verification: googlexvcpiixa6r3s77mr.html
    ```
    - GSC_GITLAB_WORK_EMAIL_VERIFICATION
    ```
    google-site-verification: googlesd46813r5g2wp6t3.html
    ```

<br/>

---

## Special Thanks

### For the layout and design inspiration
- [Dorota Gil](https://github.com/Dorota1997) and contributor's
  [React Frontend Dev Portfolio](https://dorota1997.github.io/react-frontend-dev-portfolio/)
  - [See repository](https://github.com/Dorota1997/react-frontend-dev-portfolio)
- Simon Wuyts' [Personal Website](https://www.simonwuyts.com/)
- [Muhammad Ahmad's](https://github.com/MA-Ahmad)
  [Personal Website](https://my-portfolio-ma-ahmad.vercel.app/)
- [Swiss Army Man](https://swissarmyman.com/)

### For the free software
- [Photopea](https://www.photopea.com/)
- [TinyJPG](https://tinyjpg.com/)
- [Coolors](https://coolors.co)

### For the free assets
- [World Vector Logo](https://worldvectorlogo.com/)
- [Seek Vector Logo](https://seekvectorlogo.com/)
- [Vector Logo Zone](https://www.vectorlogo.zone/)
- [Logo Wine](https://www.logo.wine/)
- Icons by [itim2101](https://www.flaticon.com/authors/itim2101) from
  [www.flaticon.com](https://www.flaticon.com/)
- Icons by [Freepik](https://www.freepik.com) from
  [www.flaticon.com](https://www.flaticon.com/)
- Icons by [turkkub](https://www.flaticon.com/authors/turkkub) from
  [www.flaticon.com](https://www.flaticon.com/)
