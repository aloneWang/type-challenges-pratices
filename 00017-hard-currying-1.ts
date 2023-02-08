// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)
const curried3 = Currying(() => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
  Expect<Equal<typeof curried3, () => true>>,
]


// ============= Your Code Here =============
 
type Curry<T extends unknown[], Return> = T extends [infer L, ...infer R]
  ? (arg: L) => Curry<R, Return>
  : Return

declare function Currying<T>(fn: T): T extends (...args: infer P) => infer R 
  ? P extends []
    ? T
    : Curry<P,R>
  : never  

var c = Currying((a:string, b:number, d: boolean) => false)
var d = Currying(() => true)



