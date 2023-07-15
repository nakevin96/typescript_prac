// 공변성과 반공변성
// 함수 간 서로 대입할 수 있는지의 여부

// a는 string을 받아 number를 반환하고
// b는 string을 받아 number 또는 string을 반환하는 함수
// ? 이게 왜 에러가 안뜰까?
function a(x: string): number {
  return +x;
}

type B = (x: string) => number | string;
const b: B = a; // ?????????????????

// 일단 이것만 기억해둡시다.
// return 값은 '더 넓은 타입으로 대입'이 가능합니다.

// 매개변수는 어떨까요?
// ㅁㅊ 얘는 왜 넓은 타입이 좁은 타입에 할당하는 게 가능하죠?
// (x: number) => number가 (x:string) => number에 대입 안되는거 아니야?

// 아닙니당 이제부터 공변성과 반공변성에 대해서 설명하겠습니다.
function a2(x: string | number): number {
  return 0;
}

type B2 = (x: string) => number;
const b2: B2 = a2;

// 공변성, 반공변성, 이변성, 불변성의 정의는 아래와 같습니다.
// - 공변성(Covariance) : A가 B의 서브타입이면 T<A>는 T<B>의 서브타입이다.
// - 반공변성 A->B일 때, T<B,>는 T<A,>의 서브타입이다.
// - 이변성 A->B일 때, T<A> -> T<B>도 되고 T<B> -> T<A>도 되는 경우
// - 불변성 A->B임에도, T<A> -> T<B>도 안되고 T<B> -> T<A>도 안되는 경우

// 기본적으로 타입스크립트에서는 공변성을 따르지만, 매개변수는 반 공변성을 갖습니다
// (strict모드 한정, 아닐 때는 이변성)

// 대다수 일반적인 경우를 봅시다.
let stringArray: Array<string> = [];
let array: Array<string | number> = [];

array = stringArray; // string이 string | number의 서브 타입이므로 가능

let subObj: { a: string; b: number } = { a: "1", b: 1 };
let superObj: { a: string | number; b: number } = subObj; // a 역시 string이 string | number의 서브타입이기에 할당 가능합니다.
// 즉 각 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이기만 하면 되는 것이죠.

// 이를 조건부 타입으로 정리해 보면 다음과 같아집니다.
type IsSubTypeOf<T, K> = T extends K ? true : false;

type T1 = IsSubTypeOf<Array<string>, Array<string | number>>;
type T2 = IsSubTypeOf<Array<string | number>, Array<string>>;

// 반공변성은 무엇일까요?
// A(좁은 타입)이 B(넓은 타입)의 subType이면 ComposedType T<B>는 ComposedType T<A>의 서브타입이라는 의미입니다.
type Logger<T> = (param: T) => void;

let logNumber: Logger<number> = (param) => {
  console.log(param.toFixed());
};

let log: Logger<string | number> = (param) => {
  console.log(param);
};

logNumber = log;
// Error: log = logNumber;
// 원래라면 공변성 규칙에 따라 log함수가 더 넓은 타입이라 log = logNumber가 되어야 할 것 같지만 에러가 생깁니다.

export {};
