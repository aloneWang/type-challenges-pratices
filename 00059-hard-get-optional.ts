// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string, }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
]


// ============= Your Code Here =============
type GetOptional<T> = {
  [k in keyof T as {} extends Pick<T, k> ? k: never]: T[k]
}

