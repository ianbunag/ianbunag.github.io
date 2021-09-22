/**
 * Type to flatten intersected object keys
 *
 * @typeParam Type - Object intersection to be flattened
 */
type FlattenIntersection<Type> = {
  [Key in keyof Type]: Type[Key]
}

/**
 * Type to replace given object entry type
 *
 * @typeParam Type - Object to be overridden
 * @typeParam Overrides - Object with override properties
 */
type Override<
  Type,
  Overrides extends Partial<{ [Key in keyof Type]: unknown }>,
> = FlattenIntersection<Omit<Type, keyof Overrides> & Overrides>
