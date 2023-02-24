// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsAny<any>, true>>,
  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]


// ============= Your Code Here =============
// type IsAny<T, M = any> =  (<K>() => K extends T ? 1 : 2 ) extends (<K>() => K extends M ? 1 : 2 ) ? true : false 
// your answers
type IsAny<T> = 'hello' extends T & 'world' ? true : false;

// type isBoolean<T> = T extends 1 ? true : false
// type IsAny<T> = boolean extends isBoolean<T> ? true : false