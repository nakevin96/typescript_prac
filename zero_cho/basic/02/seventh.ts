class ASeventh {
  a: string | undefined;
  b: number;
  constructor(a?: string, b: number = 123) {
    this.a = a;
    this.b = b;
  }

  method() {}
}

type ASeventhType = ASeventh;
const a_test: ASeventhType = new ASeventh("123");
const aa_test: typeof ASeventh = ASeventh;

// typescript에서 private이라고 하여
// 자기 클래스 내부에서만 쓸 수 있게 지정할 수 있었는데
// #을 쓰면 javascript에서 쓰는 private을 사용할 수 있습니다.
// 다만 protected와 구분이 되지 않기에 typescript를 쓰면 private 키워드를 쓰는 것을 권장합니다.
class BSeventh {
  private a: string = "123";
  #b: number = 123;
  method() {}
}

interface ASeventh2 {
  readonly a: string;
  b: string;
}

class CSeventh implements ASeventh2 {
  a = "123";
  b = "world";
}

class DSeventh extends CSeventh {}
new DSeventh().a;
new DSeventh().b;

// optional
function abc(a: number, b?: number, c?: number) {}
abc(1, 2);
abc(1, 2, 3);
abc(1);

let obj: { a: string; b?: string } = { a: "hello", b: "world" };
obj = { a: "hello2" };

export {};

//generic
// 현재 타입이 뭔지 모르니 타입을 변수처럼 나중에 받겠다.
function add<T extends string | number>(x: T, y: T): T {
  return x;
}
add<number>(3, 4);
//add<boolean>(true, false);

function add2<T extends { a: string }>(x: T): T {
  return x;
}

function add3<T extends string[]>(x: T): T {
  return x;
}

function add4<T extends (a: string) => number>(x: T): T {
  return x;
}

// abstract new (...args: any) => any는 생성자 즉 클래스 그 자체가 들어갈떄
function add5<T extends abstract new (...args: any) => any>(x: T): T {
  return x;
}

class A {}

// error
//add5(new A());
add5(A);
