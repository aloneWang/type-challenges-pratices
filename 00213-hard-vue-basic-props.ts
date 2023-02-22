// ============= Test Cases =============
import type { Debug, Equal, Expect, IsAny } from './test-utils'

class ClassA {}

VueBasicProps({
  props: {
    propA: {},
    propB: { type: String },
    propC: { type: Boolean },
    propD: { type: ClassA },
    propE: { type: [String, Number] },
    propF: RegExp,
  },
  data(this) {
    type PropsType = Debug<typeof this>
    type cases = [
      Expect<IsAny<PropsType['propA']>>,
      Expect<Equal<PropsType['propB'], string>>,
      Expect<Equal<PropsType['propC'], boolean>>,
      Expect<Equal<PropsType['propD'], ClassA>>,
      Expect<Equal<PropsType['propE'], string | number>>,
      Expect<Equal<PropsType['propF'], RegExp>>,
    ]

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
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const propE = this.propE
      type C = typeof propE
      type cases = [
        Expect<Equal<typeof fullname, string>>,
        Expect<Equal<typeof propE, string | number>>,
      ]
    },
  },
})

// ============= Your Code Here =============
type Computed<T> = {
  [p in keyof T]: T[p] extends () => infer R ? R : never
}

type Props<T> = {
  [P in keyof T]: T[P] extends {type: infer R}
    ? R extends any[]
    ? ReturnType<R[number]>
    : R extends (...arg: any[]) => void
    ? ReturnType<R> 
    : R extends new (...args:any[]) => void
    ? InstanceType<R>
    : never
    : T[P] extends (...args:any[]) => void
    ? ReturnType<T[P]>
    : any
 
}

var a = [String, Boolean]
type test<T extends any[]> = ReturnType<T[number]> 
type res = test<typeof a>

type C = StringConstructor
declare function VueBasicProps<D, M, C, P>(options: {
  props: P,
  data: (this: Props<P>) => D,
  computed:C & ThisType<D & M & P>
  methods: M & ThisType<D & M & Props<P> & Computed<C>>
}): any
