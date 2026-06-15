# Environment Variables

Listed are the important build variables.

## HOST
- Host where the app will be served
- **Required**, set to localhost for local/Docker development
- Used for generating root sitemap (`sitemap.xml`) in build package root
- Protocol must be prefixed (`http://` or `https://`)
- `localhost` value gets automatically mapped to `http://127.0.0.1`
- `0.0.0.0` value gets automatically mapped to `http://0.0.0.0`
- If serving on a specific port, it should be defined in `PORT` variable

## EXTRA_HOSTS
- Used for generating sitemaps for additional subdomains, e.g.
  `https://www.domain.com`
- **Optional**, leave blank if not needed
- Separate each entry with a comma (`,`)
- Protocol must be prefixed (`http://` or `https://`)
- If serving on a specific port, include suffix, e.g.
  `https://www.domain.com:3000`

## PORT
- Port where the app will be served
- **Optional**, leave blank if not needed

## BASE
- Base URL of the app
- **Optional**, leave blank if not needed
  - Defaults to `/`
- Used when serving the app under a different context root
  - e.g. a non root project in GitLab pages with format
    `https://namespace.gitlab.io/project-name`
