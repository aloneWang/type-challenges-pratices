// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]


// ============= Your Code Here =============
type Combination<T extends string[], U = T[number], U1 = U> = U extends string
  ? U | `${U} ${Combination<[],Exclude<U1,U>>}`
  : never