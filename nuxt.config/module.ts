export function normalizeHost (host: string): string {
  const trimmedHost = host.trim()

  if (trimmedHost === 'localhost') { return 'http://127.0.0.1' }

  return trimmedHost
}

export function normalizeName (name: string): string {
  return name.replace(/[/:]+/g, '-')
}

export function extractHostname (env: NodeJS.Process['env']): string {
  const { HOST: host = '', PORT: port } = env
  const suffix = port ? `:${port}` : ''

  return `${normalizeHost(host)}${suffix}`
}

export function extractBaseHostname (env: NodeJS.Process['env']): string {
  const base = process.env.BASE || '/'

  return `${extractHostname(env)}${base}`
}
