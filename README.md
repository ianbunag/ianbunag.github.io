# Personal Portfolio

John Ian Buñag's personal portfolio. Made with [Nuxt.js](https://nuxtjs.org/),
[Vuetify](https://vuetifyjs.com/en/) and
[TypeScript](https://www.typescriptlang.org/).

[See it live!](https://ianbunag.github.io/)

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
  - [GitHub Actions Variables](#github-actions-variables)
- [Special Thanks](#special-thanks)
  - [For the layout and design inspiration](#for-the-layout-and-design-inspiration)
  - [For the free software](#for-the-free-software)
  - [For the free assets](#for-the-free-assets)

<br/>

---

## Requirements

* [Docker](https://www.docker.com/) and Docker Compose.

<br/>

---

## Preparation

1. Copy `.env.dist` to `.env` and populate missing values:
```sh
cp .env.dist .env
```

<br/>

---

## Development

1. Start the containers (builds the app container and runs an Nginx reverse proxy):
```sh
docker compose up -d
```

2. Shell into the application container:
```sh
docker compose exec app sh
```

3. Inside the container shell, install dependencies and start the dev server:
```sh
yarn install
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) (or the port defined by `PORT` in your `.env`) in your host browser.

<br/>

---

## Build

### Manual Static Build (Within dev shell)

To generate the production-ready static site, run these commands inside the application container shell:

1. Generate static build:
```sh
yarn generate
```

2. Start the static preview server:
```sh
yarn start
```

### Production Docker Container (Local)

To build and run the production-ready application inside a local Nginx container (simulating the production container registry environment):

1. **Build the production Docker image:**
   Ensure your `.env` file is prepared in the root directory (so it is copied into the build context to populate environment variables during generation):
   ```sh
   docker build -t portfolio-prod -f docker/Dockerfile.prod .
   ```

2. **Run the production container:**
   ```sh
   docker run -d \
     --name portfolio-prod \
     -p 3000:80 \
     portfolio-prod
   ```

3. **Verify:**
   Open [http://localhost:3000](http://localhost:3000) in your host browser.

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

### GitHub Actions Variables

See [GitHub Actions Variables Reference](documentation/github-actions-variables.md)

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
