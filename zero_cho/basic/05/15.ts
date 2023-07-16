// never인지 아닌지 판단하는 타입
// 아래와 같이 만들어야 하는 이유는 무엇일까요?
type IsNever<T> = [T] extends [never] ? true : false;

// 아래와 같으면 A는 true가 될 것입니다.
type TrueTest = IsNever<never>;
// 아래는 '123'이 never를 extends하지 않으니 당연히 false일 것이구요.
type FalseTest = IsNever<"123">;

// 지금 살펴보고자 하는 부분은 다음과 같습니다.
// type IsNever<T> = T extends never ? true : false;
// 라고 왜 하지 않았는가.

// 자 실제로 저렇게 타입을 선언해 봅시다.
type IsNeverWrong<T> = T extends never ? true : false;
// true가 아닌 never가 나오는 황당한 사건이 발생합니다.
type TrueTest2 = IsNeverWrong<never>;

// 타입 매개변수랑 union이 만나면 분배법칙이 실행됩니다.
// never 자체는 그 자체로 union입니다.
// 공집합이라 뒤에 비교문 자체가 실행이 되지 않아 never가 들어가는 것이죠
// 따라서 이를 막기 위해 []를 사용하는 것 입니다.

interface VO {
  value: any;
}

// 아래에서 주의할 것은 T extends VO를 T == VO로 인지하시면 안된다는 겁니다.
// { value: 'test' }는 T인데 왜 에러가 날까요?
const returnVO = <T extends VO>(): VO => {
  return { value: "test" };
};
