// 빈 객체 타입과, Object 타입은
// 모든 타입(null, undefined제외)을 의미합니다. 모양이 객체라고 착각하면 안됩니다.
// 실제 객체는 'object'가 의미합니다.
// object는 있다는 것만 알아두고
// 실제 object에 대한 typing을 진행할 때는 interface, class, type등을 사용하면 좋습니다.

const x: {} = "hello";
const y: Object = "hi";
//const xx: object = 'hi';
const yy: object = { hello: "world" };
const z: unknown = "hi";

// unknown은 {} | null | undefined인데
// if문에 들어가면 null과 undefiend가 떨어져 나가며
if (z) {
  // 여기 나오는 z의 타입 {}이 즉 객체가 아니라 null과 undefined를 제외한 모든 type이라고 생각하시면 됩니다.
  z;
}

interface ASixth {
  readonly a: string;
  b: string;
}
const aaaa: ASixth = {
  a: "hello",
  b: "world",
};

// readonly라 못바꿈
//aaaa.a = 'hi';

// index signature
type BSixth = {
  [key: string]: string;
};

const bbbb: BSixth = {
  hi: "never",
  ine: "hi",
};

interface CSixth {
  [key: string]: string;
}

const cccc: CSixth = {
  naver: "is best",
};

// mapped types
type DTmpSixth = "Human" | "Animal";

type DSixth = {
  [key in DTmpSixth]: string;
};

const dddd: DSixth = {
  Human: "human",
  Animal: "animal",
  //Mammal : 'mammal',
};

export {};
