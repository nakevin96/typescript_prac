// forEach 타입 만들어보기
interface Arr<T> {
  forEach(callbackfn: (item: T) => void): void;
  map<U>(callbackfn: (item: T, index: number, array: T[]) => U): U[];
  filter<S extends T>(callbackfn: (item: T) => item is S): S[];
  filter(callbackfn: (item: T) => unknown): T[];
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

// filter 타입 직접 만들어보기
const aFilter = a.filter((v) => v % 2 == 0);

const c: Arr<number | string> = [1, "2", 3, "4", 5];
const cFilterFunc = (item: number | string): item is string =>
  typeof item === "string";
const cFilterResult = c.filter<string>(cFilterFunc);
const cFilterResult2 = c.filter((v): v is number => typeof v === "number");

// 정답:     filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
// filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
