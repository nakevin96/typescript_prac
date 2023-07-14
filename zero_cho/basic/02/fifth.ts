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
