// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]


// ============= Your Code Here =============
type Without<T extends unknown[], U> = T extends [infer L, ...infer R]
  ? U extends number
    ? L extends U  ? Without<R, U> : [L, ...Without<R, U>]
  : U extends unknown[]
    ? L extends U[number]
      ? Without<R,U> : [L, ...Without<R, U>]
    : []
  : []
