// 이거 하면 Operator '+' cannot be applied to types 'string|number' and 'string|number'라는 에러가 뜹니다.
// function union_add(x: string | number, y: string | number) : string | number {
//     return x + y;
// }

type IntersectionObject = { hello: "world" } & { yoon: "seok" };
const intersectionObjectTest: IntersectionObject = {
  hello: "world",
  yoon: "seok",
};

// type의 상속
type AnimalType = {
  breath: true;
};

type MammaliaType = AnimalType & {
  breed: true;
};

type HumanType = MammaliaType & {
  think: true;
};

const yoon_t: HumanType = {
  breath: true,
  breed: true,
  think: true,
};

// interface 상속
interface AnimalInterface {
  breath: true;
}

interface MammaliaInterface extends AnimalInterface {
  breed: true;
}

interface HumanInterface extends MammaliaInterface {
  think: true;
}

const yoon_i: HumanInterface = {
  breath: true,
  breed: true,
  think: true,
};

// 아래 둘 중 어떤 것이 더 넓은 타입일까요?
// 바로 A입니다.
// 집합 개념으로 생각을 해보면 A는 string과 number의 값 모두를 포함할 수 있기 때문입니다.
// !! 그래서 string & number가 never가 나오는 것 입니다. (교집합 이기 떄문)
type A = string | number;
type B = string;

// 넓은 타입에 좁은 타입을 대입할 수 있기에 type A로 정의된 변수에 type B로 정의된 변수를 할당할 수 있으나
// 반대는 불가능 합니다.

// 객체의 경우는 구체적일 수록 좁은 타입 입니다.
type A_OBJ = { name: string };
type B_OBJ = { age: number };
type C_OBJ = { name: string; age: number };
export {};
