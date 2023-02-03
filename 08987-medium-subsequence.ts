// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3] >>,
]


// ============= Your Code Here =============
//copy
type Subsequence<T extends unknown[] > =
  T extends [infer A, ...infer Rest]
    ? [A, ...Subsequence<Rest>] | Subsequence<Rest>
    : []

type case1 = Subsequence<[1,2]>