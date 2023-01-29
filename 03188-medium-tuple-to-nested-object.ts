// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]


// ============= Your Code Here =============
// a | b | c
type TupleToNestedObject<T extends unknown[], U> = T extends [infer L extends string, ...infer R extends string[]]
 ? R extends never
  ? {[p in L]: U}
  : { [p in L]: TupleToNestedObject<R, U> }
: U