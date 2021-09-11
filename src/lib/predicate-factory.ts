export function includesInsensitive (target: Array<string>) {
  return (value: string) => {
    const lowerCasedValue = value.toLowerCase()

    return target.some(entry => entry.toLowerCase() === lowerCasedValue)
  }
}
