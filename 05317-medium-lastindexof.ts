// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
]


// ============= Your Code Here =============
type LastIndexOf<
  T extends unknown[],
  U,
  S extends unknown[] = [],
  M extends number = -1,
  I extends number = S['length'], 
  > = T extends [infer L, ...infer R]
    ? (L extends U ? ( U extends L ? true : false) : false ) extends true
      ? R extends [] ? I : LastIndexOf<R, U, [...S, 0], I>
      : LastIndexOf<R, U, [...S, 0], M> 
    : M
