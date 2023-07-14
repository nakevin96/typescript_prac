// head의 타입은 Element | null입니다.
// querySelector의 결과 값으로 null이 반환 될 수 있기 때문입니다.
// 이를 Element로 확정할 수 있는 방법은
// 1. !를 붙인다.
// 2. if문을 사용한다 인데
// 가능하면 if문을 사용합시다.
const head = document.querySelector("#head");

if (head) {
  // 여기서 head는 null이 아니기에 Element가 됩니다.
  head.innerHTML = "hi";
}

// 대문자 String은 나중에 문제가 될 수 있습니다.
// string은 기본 개체이지만 String은 wrapper 개체이기 때문입니다.
const small_str: string = "hello";
const big_str: String = "hell";

type World = "world";
const world_example: World = "world";

// type greeting : hello world 를 만들고 싶을 때
// `을 사용할 수 있습니다. 이를 template literal type이라고 부릅니다.
type Greeting = `Hello ${World}`;
const greeting_example: Greeting = "Hello world";

const arr_test: string[] = [];
const arr_test2: Array<string> = [];
function rest(...args: string[]) {}

// enum
const enum EDirection {
  Up = 1,
  Down,
  Left = 4,
  Right = "right",
}

const up_var = EDirection.Up;
const right_var = EDirection.Right;

// enum대신 object를 써는 것을 선호하는 사람들도 있습니다.
// as const로 하면 Up의 타입을 number가 아닌 0으로 잡아줍니다.
// 타입을 readonly로 고정시키며 좁혀줄 수 있는 것 입니다.
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

export {};
