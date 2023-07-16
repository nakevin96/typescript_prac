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

export {};
