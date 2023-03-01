// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const
const Command = ['echo', 'grep', 'sed', 'awk', 'cut', 'uniq', 'head', 'tail', 'xargs', 'shift'] as const


type cases = [
  Expect<Equal<Enum<[]>, {}>>,
  Expect<Equal<
  Enum<typeof OperatingSystem>,
  {
    readonly MacOS: 'macOS'
    readonly Windows: 'Windows'
    readonly Linux: 'Linux'
  }
  >>,
  Expect<Equal<
  Enum<typeof OperatingSystem, true>,
  {
    readonly MacOS: 0
    readonly Windows: 1
    readonly Linux: 2
  }
  >>,
  Expect<Equal<
  Enum<typeof Command>,
  {
    readonly Echo: 'echo'
    readonly Grep: 'grep'
    readonly Sed: 'sed'
    readonly Awk: 'awk'
    readonly Cut: 'cut'
    readonly Uniq: 'uniq'
    readonly Head: 'head'
    readonly Tail: 'tail'
    readonly Xargs: 'xargs'
    readonly Shift: 'shift'
  }
  >>,
  Expect<Equal<
  Enum<typeof Command, true>,
  {
    readonly Echo: 0
    readonly Grep: 1
    readonly Sed: 2
    readonly Awk: 3
    readonly Cut: 4
    readonly Uniq: 5
    readonly Head: 6
    readonly Tail: 7
    readonly Xargs: 8
    readonly Shift: 9
  }
  >>,
]
// ============= Your Code Here =============

type MerageObj<T> = Pick<T, keyof T>

// type Enum<
//   T extends readonly string[],
//   N extends boolean = false,
//   Result extends Record<string | number | symbol, any> = {},
//   Index extends any[] = []> = Index['length'] extends T["length"] 
//     ? Result
//     : Enum<T, N, MerageObj<
//     Result & {
//       readonly [P in T[Index["length"]] as Capitalize<P>]: N extends true ? Index["length"] : P 
//     }>, [...Index, 0]>

// COPY
type Enum<
  T extends readonly string[], 
  N extends boolean = false       
> = {
  [
    Key in keyof T 
      as Key extends `${infer I extends number}`
    ? Capitalize<T[I]>
        : never
  ]: N extends false
    ? T[Key]
    : Key extends `${infer I extends number}`
      ? I
      : never
}
type c = Enum<typeof OperatingSystem, true>



