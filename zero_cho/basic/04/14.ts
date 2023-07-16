const p1 = Promise.resolve(1)
  .then((a) => a + 1)
  .then((a) => a + 1)
  .then((a) => a.toString());

const p2 = Promise.resolve(2);

const p3 = new Promise((res, rej) => {
  setTimeout(res, 1000);
});

// all<T extends readonly unknown[] | []>(values: T) : Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;
// T가 [p1, p2, p3]인데
// keyof T는 무엇일까요? 바로 '0' | '1' | '2' | 'length' 입니다.
// T[P]는 배열의 값들이 될 것입니다.
// 즉 T[P] 는 p1, p2, p3를 각각 가리킵니다.

// 이번에는 Awaited에 대해 자세히 알아봅시다.
// type Awaited<T> =
//     T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
//         T extends object & { then(onfulfilled: infer F, ...args: infer _): any } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
//             F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to `then` is callable, extracts the first argument
//                 Awaited<V> : // recursively unwrap the value
//                 never : // the argument to `then` was not callable
//         T; // non-object or non-thenable
Promise.all([p1, p2, p3]).then((result) => {
  console.log(result);
});

// bind
// bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
// bind<T, A extends any[], B extends any[], R>(this: (this: T, ...args: [...A, ...B]) => R, thisArg: T, ...args: A): (...args: B) => R;

// type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;

// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
function bindCheck(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number
) {
  return a + b + c + d + e + f + g;
}

const test1 = bindCheck.bind(null);
test1(1, 2, 3, 4, 5, 6, 7);
const test2 = bindCheck.bind(null, 1);
test2(2, 3, 4, 5, 6, 7);
const test3 = bindCheck.bind(null, 1, 2);
test3(3, 4, 5, 6, 7);
const test4 = bindCheck.bind(null, 1, 2, 3);
test4(4, 5, 6, 7);
const test5 = bindCheck.bind(null, 1, 2, 3, 4);
test5(5, 6, 7);
const test6 = bindCheck.bind(null, 1, 2, 3, 4, 5);
test6(6, 7);
const test7 = bindCheck.bind(null, 1, 2, 3, 4, 5, 6);
test7(7);
const test8 = bindCheck.bind(null, 1, 2, 3, 4, 5, 6, 7);
test8();

// flat
const a = [1, 2, 3, [1, 2], [[1], [2]]];
const flatA = a.flat();
const flatA2 = a.flat(2);
const flatB = [1, 2, 3, [1, 2]].flat();
// flat은 차원을 어떻게 알고 줄여줄 수 있을까요?

// flat<A, D extends number = 1>(
//     this: A,
//     depth?: D
// ): FlatArray<A, D>[]

// type FlatArray<Arr, Depth extends number> = {
//     "done": Arr,
//     "recur": Arr extends ReadonlyArray<infer InnerArr>
//         ? FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]>
//         : Arr
// }[Depth extends -1 ? "done" : "recur"];

// 위에서 depth를 낮추는 과정이 진짜 쇼킹한게 배열을 만들어두고 index로 접근하며 -1한 값을 가져오는 것 입니다.

type directSelect = {
  name: string;
  age: number;
  isMarried: boolean;
}[1 extends number ? "age" : "name"];

export {};
