# Personal Portfolio

[![license](https://img.shields.io/npm/l/@ianbunag/dock)](https://gitlab.com/ianbunag/dock/-/blob/master/LICENSE)
[![Continuous Delivery](https://img.shields.io/badge/dynamic/json?color=informational&label=%E2%9A%99%20CD&query=%24%5B0%5D.status&url=https%3A%2F%2Fgitlab.com%2Fapi%2Fv4%2Fprojects%2F28935241%2Fpipelines%3Fscope%3Dtags%26per_page%3D1)](https://gitlab.com/ianbunag/ianbunag.gitlab.io/-/pipelines?page=1&scope=tags)

John Ian Buñag's personal portfolio. Made with [Nuxt.js](https://nuxtjs.org/),
[Vuetify](https://vuetifyjs.com/en/) and
[TypeScript](https://www.typescriptlang.org/).

[See it live!](https://ianbunag.gitlab.io/)

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
nvm use
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
| ![#46748A](https://dummyimage.com/15x15/46748A/46748A.png) 	| Primary   	| primary   	| Teal Blue    	| #46748A  	|
| ![#795663](https://dummyimage.com/15x15/795663/795663.png) 	| Secondary 	| secondary 	| Deep Taupe   	| #795663  	|
| ![#a2d6f9](https://dummyimage.com/15x15/a2d6f9/a2d6f9.png) 	| Accent    	| accent    	| Uranian Blue 	| #a2d6f9  	|

#### Background Scheme

All background colors are picked from a
[Visme blog post](https://visme.co/blog/website-color-schemes/#:~:text=Corporate%20and%20Traditional),
from the [Swiss Army Man Official Movie Site](https://swissarmyman.com/).

|                                                                 	| Role    	| Key                	| Name                       	| Hex Code 	|
|-----------------------------------------------------------------	|---------	|--------------------	|----------------------------	|----------	|
| ![#112d32](https://dummyimage.com/15x15/112d32/112d32.png) 	| Darker  	| background-darker  	| Outer Space Crayola        	| #112d32  	|
| ![#254e58](https://dummyimage.com/15x15/254e58/254e58.png) 	| Dark    	| background-dark    	| Midnight Green Eagle Green 	| #254e58  	|
| ![#4f4a41](https://dummyimage.com/15x15/4f4a41/4f4a41.png) 	| Median  	| background-median  	| Davys Grey                 	| #4f4a41  	|
| ![#6e6658](https://dummyimage.com/15x15/6e6658/6e6658.png) 	| Light   	| background-light   	| Dim Gray                   	| #6e6658  	|
| ![#88bdbc](https://dummyimage.com/15x15/88bdbc/88bdbc.png) 	| Lighter 	| background-lighter 	| Opal                       	| #88bdbc  	|

<br/>

### Environment Variables

See [Environment Variables Reference](documentation/environment-variables.md)

<br/>

### GitLab CI/CD Variables

See [GitLab CI/CD Variables Reference](documentation/gitlab-ci-cd-variables.md)

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
