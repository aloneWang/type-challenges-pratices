// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]


// ============= Your Code Here =============
//copy
//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types

// 条件 类型中， 协变位置中，同一个类型的变量多个候选项会导致推断为联合类型
// 协变： 子类型 赋 给 父类型， 逆变： 父类型 赋 给 子类型
type Bar<T> = T extends {a: infer S, b:infer S} ? S : never 
type T20 = Bar<{a: string, b: number}> // string | number

// 条件类型， 逆变位置，同一个类型的变量的多个候选项会导致推断为交叉类型
type Bar1<T> = T extends {a: (arg: infer U) => any, b: (arg: infer U) => any} ? U : never
type T21 = Bar1<{a: (a: string) => any, b: (a: number)=> any}>

type UnionToIntersection<T> = (
  T extends any ? (arg: T) => any : never
) extends (arg: infer R) => any ? R : never

// 但是这样写就不行
// 解释： 内部还是 构成了联合类型
/**
 * 
 * type UnionToIntersection1<T> = T extends any
  ? ((arg: T) => any) extends ((arg: infer R) => any)
    ? R
    : never
  : never
 * 
 */


type case2 = UnionToIntersection<'foo' | 42 | true>