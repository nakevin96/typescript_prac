interface A_fifth {
  a: string;
}

interface A_fifth {
  b: string;
}

let obj1_fifth: A_fifth = {
  a: "hello",
  b: "ine",
};

// 객체 리터럴을 바로 넣으면 잉여속성 검사가 동작하여 에러가 발생하지만
// let obj2_fifth: A_fifth = {
//   a: "hello",
//   b: "ine",
//   c: "nice to meet you",
// };

// 아래와 같이 새로운 object를 만들어 대입하면 duck typing으로 인해 에러가 발생하지 않습니다.
let obj2_tmp_fifth = {
  a: "hello",
  b: "ine",
  c: "nice to meet you",
};

let obj2_fifth: A_fifth = obj2_tmp_fifth;

function a_fifth(): void {
  // return 3;
  // void return 값일 경우 값을 return할 때 에러가 발생
  return;
}

// 위 문장을 보면 아래 코드가 정상동작 하는 것에 의문이 생길 수 있습니다.
// 아니 void 타입 반환이라고 interface만들어줬는데
// 'abc'반환하면 에러나야 하는 것 아니야?
// 라고 말입니다
// 하지만 매개변수나 interface에서 사용되는 함수의 반환 타입은
// 아무 값도 반환하지 말아라가 아닌, 반환 값을 사용하지 않을 것이다 라는 의미입니다.
// 같은 void이지만 의미가 다르게 쓰인 것이죠.
interface HumanFifth {
  talk: () => void;
}

const human_fifth: HumanFifth = {
  talk() {
    return "abc";
  },
};

// 문제는 이 값을 받아서 쓰면 해당 변수 값이 void가 됨
// 즉 실제로 'abc'라는 값이 필요하면 talk: () => string; 으로 쓰는 것이 올바른 방식입니다.
// 아니면 as unknown을 통해 타입 형변환을 해서 씁니다.
let humanFifthTalkTest1 = human_fifth.talk();
let humanFifthTalkTest2 = human_fifth.talk() as unknown as number;

// declare는 다른 파일에 선언되어 있는 함수를
// 현재 파일에서 사용하고 싶을 때, 나중에 합쳐질 경우 문제가 없으나
// 현재 파일에서는 다른 파일에 존재하고 있는지 아닌지 모르기 때문에 declare로 타입만 명시해 주어
// 사용할 수 있습니다.
// 즉 함수가 다른 곳에 선언 되어 있는 것을 내가 보장할게 라는 의미의 keyword입니다.
declare function forEachFifth(
  arr: number[],
  // 여기 콜백을 (el:number) => number로 설정하는 것이 맞으나
  // push를 통해 배열에 저장만 하고 반환 값을 상관하지 않을 것이라는 뜻으로 void를 쓴것이지
  // 반환 값이 없어야 한다는 뜻이 아닙니다.
  callback: (el: number) => void
): void;

let target: number[] = [];
forEachFifth([1, 2, 3], (el) => target.push(el));
forEachFifth([1, 2, 3], (el) => {
  target.push(el);
});

// unknown과 any의 차이는 무엇일까요?
// any의 경우 타입스크립트가 타입 체킹을 포기합니다.
// 타입스크립트를 쓰는 의미가 없어집니다.
// unknown을 쓸 경우 나중에 쓸 때 타입을 정의해서 쓰겠다는 의미로
// 타입스크립트가 타입 체킹을 포기하지 않고 잘못 쓸 경우 에러를 띄워줍니다.
// 잘 이해가 안간다면 try catch문의 error가 unkown타입인 것을 떠올려 봅시다.
try {
} catch (error) {
  (error as Error).message;
}

// 타입 가드
function numOrStrFifth(a: number | string) {
  if (typeof a === "string") {
    // a의 타입을 'string'으로 좁혀줌
    a.split(",");
  } else {
    // string을 걸러냈기 때문에 여기 a는 number임.
    a.toFixed(1);
  }
}
numOrStrFifth("123");
numOrStrFifth(1);

function numOrNumArrayFifth(a: number | number[]) {
  if (Array.isArray(a)) {
    a.concat(40);
  } else {
    a.toFixed(3);
  }
}

// class는 자체적으로 타입이 될 수 있습니다.

class AClass {
  aaa() {}
}

class BClass {
  bbb() {}
}

function aOrBFifth(param: AClass | BClass) {
  if (param instanceof AClass) {
    param.aaa();
  } else {
    param.bbb();
  }
}

// 이거 에러, class를 타입으로 썼을 때는
// class그 자체가 아니라 instance를 받는 다는 의미
// aOrBFifth(AClass);

// 아래가 정상
aOrBFifth(new AClass());

type BFifth = {
  type: "b";
  bbb: string;
};

type CFifth = {
  type: "c";
  ccc: string;
};

type DFifth = {
  type: "d";
  ddd: string;
};

// 아래와 같이 속성으로 타입가드를 하면
// 자동완성을 알아서 해줌을 확인할 수 있습니다.
function typeCheckFifth(a: BFifth | CFifth | DFifth) {
  if (a.type === "b") {
    a.bbb;
  } else if (a.type === "c") {
    a.ccc;
  } else {
    a.ddd;
  }
}

function typeCheckWithInFifth(a: BFifth | CFifth | DFifth) {
  if ("bbb" in a) {
    a.bbb;
  } else if ("ddd" in a) {
    a.ddd;
  } else {
    a.ccc;
  }
}

const MammaliaFifthType = {
  HUMAN: "human",
  DOG: "dog",
  CAT: "cat",
} as const;

const humanFifth = { type: MammaliaFifthType.HUMAN };
const dogFifth = { type: MammaliaFifthType.DOG };
const catFifth = { tpye: MammaliaFifthType.CAT };

interface CatFifth {
  meow: number;
}

interface DogFifth {
  bow: number;
}

function catOrDogFifth(a: CatFifth | DogFifth): a is DogFifth {
  // 타입 판별을 직접 함.
  // 여기서는 강아지 임을 판단하는 코드
  if ((a as CatFifth).meow) {
    return false;
  }
  return true;
}
// 타입을 구분해주는 커스텀 함수를 직접 만들 수 있습니다.
// 이전까지는 typeof instanceof in 등을 통해 구분했다면
// 위의 catOfDogFifth와 같이 커스텀 타입가드를 만들 수 있습니다.
const catFifth1: CatFifth | DogFifth = { meow: 3 };
const dogFifth1: CatFifth | DogFifth = { bow: 4 };
if (catOrDogFifth(dogFifth1)) {
  console.log(dogFifth1.bow);
}
if ("meow" in catFifth1) {
  console.log(catFifth1.meow);
}
