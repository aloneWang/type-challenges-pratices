// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]


// ============= Your Code Here =============
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// copy

type Fibonacci<
  T extends number,
  C extends unknown[] = [],
  FB1 extends unknown[] = [],
  FB2 extends unknown[] = [0]
> = T extends C['length']
  ? FB1['length']
  : Fibonacci<T, [...C, 0], FB2, [...FB1, ...FB2]>
