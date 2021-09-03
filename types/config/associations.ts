export interface Association {
  name: string,
  url?: string,
  logoURL?: string,
  logoAccent?: string,
}

export type AssociationMap = Record<string, Association>
