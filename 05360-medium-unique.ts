// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
]


// ============= Your Code Here =============
// type Unique<T extends unknown[]> = T extends [infer L, ...infer R]
//   ? L extends R[number]
//     ? Unique<R>
//     : [L, ...Unique<R>]
//   :[]

type Include<T extends unknown[] = [], S = ''> = T extends [infer L, ...infer R] 
  ? Equal<L,S> extends true
    ? true
    : Include<R, S>
  : false

type Unique<T extends unknown[], Acc extends unknown[] = []> = T extends [infer L, ...infer R]
  ? Include<Acc, L>  extends true
    ? Unique<R, Acc> 
    : Unique<R, [...Acc, L]>
  : Acc


