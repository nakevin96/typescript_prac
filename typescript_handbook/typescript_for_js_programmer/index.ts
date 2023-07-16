class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user1: UserAccount = new UserAccount("yoon", 1);

const getAdminUser: () => UserAccount = () => {
  return new UserAccount("admin", 0);
};

const deleteUser: (user: UserAccount) => void = (user) => {
  return;
};

// 타입을 지정하기 위한 방법으로 type과 interface가 존재하는데
// 핸드북에서 interface를 우선적으로 사용하고 특정 기능이 필요할 때 type을 사용하길 권장.

type BirdType = {
  wings: 2;
};
interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };

const bird3: BirdInterface = bird1;

type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

interface Peacock extends BirdType {
  colourful: true;
  flies: false;
}
interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}

let owl: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = { wings: 2, colourful: false, flies: false };

// Composing Types
// 객체들을 조합하여 더 크고 복잡한 객체를 만드는 것과 같이 TypeScript에도 이를 수행하는 도구 존재
// Union과 Generic

// Unions
// unions가 많이 사용되는 사례는 아래와 같이 string또는 number의 literal 집합을 표현하는 것
type MyBool = true | false;
type WindowsStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
// Union의 다양한 타입 처리 방법
function getLength(obj: string | string[]) {
  return obj.length;
}

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  } else if (Array.isArray(obj)) {
    return obj;
  } else {
    throw Error("this is not string or string[]");
  }
}

// Generics
// 제네릭은 간단하게 설명하면 타입에 변수를 제공하는 방법
// 배열이 일반적인 예시이며, 제네릭이 없는 배열은 어떤 것이든 포함 가능
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

//  제네릭을 사용하는 고유 타입 선언 가능
interface BackPack<T> {
  add: (obj: T) => void;
  get: () => T;
}

declare const backpack: BackPack<string>;
const backpackObj = backpack.get();
backpack.add("23");

// Structural Type System
// 타입스크립트의 핵심 원칙 ***** 타입 검사가 값이 있는 형태에 집중 *****
// 이로 인해 duck typing, 구조적 타이핑이라 불림

interface Point {
  x: number;
  y: number;
}

const printPoint = (p: Point): void => {
  console.log(`${p.x} , ${p.y}`);
};

const point = { x: 12, y: 26 };
printPoint(point);

export {};
