// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
  Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
  Expect<Equal<FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>, [1, 'a', false]>>,
  Expect<Equal<FilterOut<[number | null | undefined, never], never | null | undefined>, [number | null | undefined]>>,
]


// ============= Your Code Here =============
// any unkonw 是所有基础类型的父类型， any 会跳过类型检查， unkonw相对 any 安全， 任何类型可以赋值给 unkonw 类型， 但是 unkonw 不能赋值 给 非 unkonw ，非 any类型,
// never 为 永远不可能出现的值., never 是 任何类型的子类型
// 当 泛型参数 为 never 时 得到的值永远 是 never , 形如 T extends never ====> never

/**
 * 
let d:unknown = 1212
let f = 1212
f = d // error
 */

// never 类型 特殊
// never extends T ==> true  T extends nerver ===> never
// 解决 使用 非 裸类型 [T] extends [never]
type FilterOut<T extends any[], F, Result extends any[] = []> = T extends [infer L, ...infer R]
  ? [L] extends [F]
    ? FilterOut<R, F, Result>
    : FilterOut<R, F, [...Result, L]>
  : Result






