// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]


// ============= Your Code Here =============
type PickByType<T, U> = {
  [p in keyof T as (
    T[p] extends U ? p : never
  )]: T[p]
}

//题外 
// 返回指定键值的value 联合类型
const options = [
  {label: "12", value: '1'},
  {label: "12", value: '2'},
  {label: "12", value: '3'},
  {label: "12", value: '4'},
  {label: "12", value: '5'}
] as const 
type valueType<T extends readonly {[key:string]:any}[], S extends string> = T[number] extends infer R 
  ? R extends {[key:string]:any}
    ? S extends keyof R 
      ? R[S] : never
  : never
: never   
type c = valueType<typeof options, 'value'>
const size: valueType<typeof options, 'value'> = '1'
