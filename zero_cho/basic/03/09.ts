// forEach 타입 만들어보기
interface Arr<T> {
  forEach(callbackfn: (item: T) => void): void;
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
