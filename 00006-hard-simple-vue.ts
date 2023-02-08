// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return this.firstname
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.amount)
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
    },
  },
})


// ============= Your Code Here =============
// copy
type Computed<T> = {
  [k in keyof T]: T[k] extends (...args: any) => infer R ? R : never
} 
declare function SimpleVue<D, C, M>(options:{
  data?:() => D,
  computed?: C & ThisType<D & Computed<C> & M>,
  methods?: M & ThisType<D & Computed<C> & M>
}):any


SimpleVue({
  data() {
    return {
      age:1,
      name: 2
    }
  },
  computed: {
    say() {
      this.age = 112
      return `${this.age}`
    }
  },
  methods: {
    getName() {
      this.age = 1212
    }
  }
})

