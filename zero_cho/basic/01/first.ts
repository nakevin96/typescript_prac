let a_string: string = "이세계 아이돌";

// npx tsc --noEmit을 치면 확인 가능
// Type 'number' is not assignable to type 'string'
// a = 158;

const a_num: number = 5;
const a_boolean: boolean = true;
const a_undefined: undefined = undefined;
const a_null: null = null;
function add_default_function(x: number, y: number): number {
  return x + y;
}

const add_arrow_function: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

type SubstractType = (x: number, y: number) => number;

const substract_arrow_function: SubstractType = (x, y) => {
  return x - y;
};

interface MulInterfaceType {
  (x: number, y: number): number;
}

const mul_arrow_function: MulInterfaceType = (x, y) => x * y;

const obj: {
  lat: number;
  lon: number;
} = {
  lat: 37.6,
  lon: 127.9,
};

const arr: string[] = ["123", "456"];
const arr2: Array<number> = [1, 2, 3, 4];
const arr3: [number, string, number] = [158, "ine", 1];

// 타입 스크립트가 정확히 추론을 할 경우 타입을 지정할 필요가 없고
// 타입 스크립트가 타입을 잘못 추론했을 경우에 타입을 지정해주면 된다.
const only_true: true = true;

const only_five: "5" = "5";
