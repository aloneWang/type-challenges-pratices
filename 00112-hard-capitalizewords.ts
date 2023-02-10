// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>, 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]


// ============= Your Code Here =============

type Noletter<S extends string> = Uppercase<S> extends Lowercase<S> ? true : false 

type CapitalizeWords<S extends string, U extends string = '', isFirst = true> = S extends `${infer L}${infer R}`
  ? isFirst extends true
    ? CapitalizeWords<R, `${U}${Capitalize<L>}`, Noletter<L>>
    : CapitalizeWords<R, `${U}${L}`, Noletter<L>>
  : U


  type case1 = CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp👍qq'>

  type case3 = CapitalizeWords<'sd👍qq'>