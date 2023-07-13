// never 타입을 완전히 이해하기 위해서 타입이 무엇인지, 시스템에서 어떤 일을 하는지 알아야 합니다.

// 타입은 가능한 값의 집합입니다.
// 예를 들어 string 타입은 무한히 가능한 모든 문자열의 집합을 의미합니다.
// 그래서 변수의 타입을 string으로 지정하면, 해당 변수는 오직 가능한 집합 내의 값만 갖게 됩니다.

let ine: string = "ine";
// Type 'number' is not assignable to type 'string'.
//ine = 158;

// typescript에서 never타입은 값의 '공집합' 입니다.
// 집합에 어떤 값도 없기 때문에 never타입은 any 타입을 포함하여 어떠한 값도 가질 수 없습니다.

declare const any_obj: any;
// Type 'any' is not assignable to type 'never'.
// const never: never = any_obj;

// never 타입은 왜 필요할까요?
// 바로 아무것도 없음을 표현하기 위함입니다.
// 불가능을 표현하기 위함인데 타입스크립트에서 불가능은 아래와 같습니다.
// - 값을 표현할 수 없는 빈 타입
// - 실행이 끝날 때 호출자에게 제어를 반환하지 않는 함수의 반환 타입
// - 절대 도달 할 수 없는 else 분기의 조건 타입
// - 거부된 프로미스에서 처리된 값의 타입
// const promise_reject_test : Promise<never>
const promise_reject_test = Promise.reject("foo");

// 숫자 0이 덧셈과 곱셈에서 특별한 역할을 하는 것 처럼
// never역시 유니언 교차 타입에서 특별한 역할을 수행합니다.

// 숫자 0을 더하면 동일한 숫자가 나오는 것처럼
// never타입은 유니언 타입에서 없어집니다.
// type NeverUnionTest = string
type NeverUnionTest = never | string;

// 숫자 0을 곱하면 모두 0이 되는 것처럼
// never타입은 교차 타입을 덮어 씁니다.
// type NeverIntersectionTest = never
type NeverIntersectionTest = never & string;

// never 타입은 어떤 상황에서 사용할까요?
// - 허용할 수 없는 함수 매개변수에 제한을 가할 때
// > never를 사용하여 다양한 사용 사례에 놓인 함수에 제한을 걸 수 있습니다.

// - switch, if-else 문의 모든 상황을 보장할 때
// 함수가 단 하나의 never 타입 인수만을 받을 수 있을 경우 해당 함수를 never타입 이외의 값으로 호출 불가

function fn(input: never) {}

// 오직 never만 받습니다.
declare let myNever: never;
fn(myNever);

// 아무 값이나 전달하거나 아무 값도 전달하지 않으면 에러
// Error: Expected 1 arguments, but got 0.
// fn();
// Error: Argument of type 'number' is not assignable to parameter of type 'never'.
// fn(1);

// 이런 함수를 사용하면 switch, if-else의 모든 상황을 보장할 수 있습니다.

function unknownColor(x: never): never {
  throw new Error("unknown color");
}

type Color = "red" | "blue" | "purple";

function getColorName(c: Color): string {
  switch (c) {
    case "red":
      return "is red";
    case "blue":
      return "is blue";
    default:
      return unknownColor(c);
  }
}

// 이번에는 VariantA 혹은 VariantB 타입의 매개변수를 받는 함수가 있다고 합시다.
// 사용자는 두 타입의 모든 속성을 모두 포함하는 하위 타입을 전달하면 안됩니다.

type VariantA = {
  a: string;
};

type VariantB = {
  b: number;
};

declare function fn2(arg: VariantA | VariantB): void;

const input = { a: "foo", b: 123 };
fn2(input);
