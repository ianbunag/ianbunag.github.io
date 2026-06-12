# GitHub Actions Variables

Listed are the variables used during build and deploy, consumed in
[deploy.yml](../.github/workflows/deploy.yml).

Configure these under
**Settings → Secrets and variables → Actions → Variables** in the GitHub
repository.

## ENV
- Full contents of the `.env` file used during the production build
- Written to `.env` before `yarn generate` runs
- Stored as a repository **variable** (not a secret) since the values are
  non-sensitive (public portfolio links and hosts)
- See [Environment Variables Reference](environment-variables.md) for the
  individual keys
