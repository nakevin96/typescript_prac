// forEach 타입 만들어보기
interface Arr<T> {
  forEach(callbackfn: (item: T) => void): void;
  map<U>(callbackfn: (item: T, index: number, array: T[]) => U): U[];
}

const a: Arr<number> = [1, 2, 3];

a.forEach((item) => {
  console.log(item);
  item.toFixed();
});

a.forEach((item) => {
  console.log(item);
  return "3";
});

const b: Arr<string> = ["1", "2", "3"];
b.forEach((item) => {
  console.log(item);
  item.charAt(0);
});

// 정답
// lib.es5.d.ts
// forEach (callbackfn : (value: T, index: number, array: T[]) => void, thisArg?: any):void;

// map타입 직접 만들어보기
const aMap = a.map((v) => v + 1);
const aMap2 = a.map((v) => v.toString());
const bMap = b.map((v) => v + "!");

// 정답: map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
