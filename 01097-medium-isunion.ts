// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
]


// ============= Your Code Here ============= 
/**此时要利用包裹 [] 不分发的特性，即在分发后，由于在每次执行过程中，第一个 A 都是联合类型的某一项
 * 因此用 [] 包裹后必然与原始值不相等，所以我们在 extends 分发过程中，再用 [] 包裹 extends 一次，如果此时匹配不上，说明产生了分发：
 * 
 * **/
//，copy
type IsUnion<T, O =T> = [T] extends [never] ? false :  
  T extends O ? 
    [O] extends [T] ? false : true
  : never


// string | never
// [string | never] extends [string] | [never]

type f = [string | number] extends [string] | [number] ? false : true
type f1 = [string | 'a'] extends [string] | ['a'] ? false : true

type f2 = [1] extends [2] | [1] ? false : true
//[string | number] extends [string] | [number]
/**
 * type Test<T, U> = T extends U ? true : false
 * 
 * 若 T 是联合类型
 * 假设 T = 1 | 2
 * T extends U ? true : false ==> (1 extends U) | (2 extends U) ? true : false
 * 这是 ts 的  Distribution conditions（分布条件） 特性 
 * 使用 [T] 包裹下可以避免 这种特性
 * 
 */



