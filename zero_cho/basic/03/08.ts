// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

//
interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
}

[1, 2, 3].forEach((item) => {
  console.log(item);
});

["1", "2", "3"].forEach((item) => {
  console.log(item);
});

[true, false, true].forEach((item) => {
  console.log(item);
});

//map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// map을 분석해보면, callback function 매개변수에 T type의 value가 들어오고
// callback function return value에 U가 반환된다면 결과는 U[]이다
// 이로 인해 stringArr의 타입이 string[]로 잘 추론되는 것이다.
const stringArr = [1, 2, 3].map((item) => item.toString());

export {};
