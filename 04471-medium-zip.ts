// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]


// ============= Your Code Here =============
// type Zip<
//   T extends unknown[],
//   U extends unknown[],
//   I extends unknown[] = [],
//   S extends unknown[] = [],
//   Index extends number = I['length']> = 0 extends U['length'] | T['length']
//   ? []
//   : undefined extends T[Index] | U[Index]
//     ? S
//     : Zip<T, U, [...I, 0], [...S, [T[Index], U[Index]]]>

type Zip<T, U, Res extends any[] = []> = T extends [infer F, ...infer R]
  ? U extends [infer F2, ...infer R2]
    ? Zip<R, R2, [...Res, [F, F2]]>
    : Res
  : Res;
