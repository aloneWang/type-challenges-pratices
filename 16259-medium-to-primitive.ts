// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type PersonInfo = {
  name: 'Tom'
  age: 30
  married: false
  addr: {
    home: '123456'
    phone: '13111111111'
  }
  hobbies: ['sing', 'dance']
}

type ExpectedResult = {
  name: string
  age: number
  married: boolean
  addr: {
    home: string
    phone: string
  }
  hobbies: [string, string]
}

type cases = [
  Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>,
]


// ============= Your Code Here =============
// type F = 1 extends { valueOf(): number} ? true : false

// type S = '1' extends { toString(): string } ? true : false

type ToPrimitive<T> = {
  [K in keyof T]: T[K] extends object 
    ? ToPrimitive<T[K]> 
    : T[K] extends {valueOf(): infer R} ? R : never
}

