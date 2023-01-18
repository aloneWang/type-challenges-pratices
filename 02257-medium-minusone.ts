// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]


// ============= Your Code Here =============
// type MinusOne<T extends number> = 

// copy
// 一些没用的括号只是为了让我的vscode 缩进

// 思路来源 参考  Alexsey  https://github.com/type-challenges/type-challenges/issues/21627

// 改动了些原作者起的类型名字（因为不懂英语，所以起了些简单的名字，方便让我分析逻辑）
// 比如 DSUB DADD 等其实是原样复制过来的代码

type REV<S extends string> = S extends `${infer F}${infer R}` ? `${REV<R>}${F}` : S
// 数字加减后的对应数字
type DSUB<C extends string> = '09876543210' extends `${string}${C}${infer R}${string}` ? R : never
type DADD<C extends string> = '01234567890' extends `${string}${C}${infer R}${string}` ? R : never
// 转为数值
type NUM<S extends string> = S extends `${infer N extends number}` ? N : `(●'◡'●)`
//栗子 011>>901 001>>99 234>>134
type RSUB<T extends string> = T extends `${infer A}${infer B}`
    ? (A extends '0'
        ? `9${B extends '1' ? '' : RSUB<B>}`
        : `${DSUB<A>}${B}`)
    : ''
//栗子 99>>001 901>>011 234>>334
type RADD<T extends string> = T extends `${infer A}${infer B}`
    ? (A extends '9'
        ? `0${B extends '' ? '1' : RADD<B>}`
        : `${DADD<A>}${B}`)
    : ''
// main 0>>-1
type MinusOne<T extends number, S extends string = `${T}`> =
    // 0>-1 的操作在这里做，似乎会减少很多工作
    S extends '0'
    ? -1
    : S extends `-${infer N}`
    ? NUM<`-${REV<RADD<REV<N>>>}`>
    : NUM<REV<RSUB<REV<S>>>>

type c = MinusOne<100000>
