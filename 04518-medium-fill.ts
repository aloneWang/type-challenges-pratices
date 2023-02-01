// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]


// ============= Your Code Here =============
//copy
type FillEmptyTuple<
  N extends number,
  R extends unknown[] = [],
>
= R['length'] extends N
  ? R
  : FillEmptyTuple<N, [unknown, ...R]>

type IsBetween<
  T extends number,
  A extends number,
  B extends number,
  E = FillEmptyTuple<T>,
>
= T extends A
  ? true
  : E extends [unknown, ...infer Rest]
    ? E['length'] extends B
      ? false
      : Rest['length'] extends A
        ? true
        : IsBetween<T, A, B, Rest>
    : false

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Indexs extends unknown[] = [],
  R extends unknown[] = [],
>
= Start extends End
  ? T
  : T extends [infer First, ...infer Rest]
    ? Fill<
        Rest,
        N,
        Start,
        End,
        [unknown, ...Indexs],
        IsBetween<Indexs['length'], Start, End> extends true
          ? [...R, N]
          : [...R, First]
      >
    : R

type case1 = IsBetween<6,6,1>