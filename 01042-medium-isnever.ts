// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]


// ============= Your Code Here =============
type IsNever<T> = [T] extends [never] ? true : false

// 笔记
/**
 * 
  type X = never extends never ? 1 : 0 // 1
  type Custom<T> = T extends never ? 1 : 0
  type Y = Custom<never> // never

    理论上相同的代码，为什么用泛型后输出就变成 never 了呢？原因是 TS 在做 T extends never ? 时，
    会对联合类型进行分配，此时有一个特例，即当 T = never 时，会跳过分配直接返回 T 本身，所以三元判断代码实际上没有执行。
    [T] extends [never] 这种写法可以避免 TS 对联合类型进行分配，继而绕过上面的问题。
 * 
 */