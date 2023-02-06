// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
]


// ============= Your Code Here =============

type StringToUnion<T extends string, S extends string= ''> = T extends `${infer L}${infer R}` ? StringToUnion<R, S | L> : S

type FirstUniqueCharIndex<T extends string, I extends unknown[] = [], SliceStr extends string = ''> = T extends `${infer L}${infer R}`
  ? L extends StringToUnion<R>
    ? FirstUniqueCharIndex<R, [...I, 0], SliceStr | L> 
    : L extends SliceStr
      ? FirstUniqueCharIndex<R, [...I, 0], SliceStr>
      : I['length']
  : -1
