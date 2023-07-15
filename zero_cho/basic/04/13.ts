function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

type Params = Parameters<typeof zip>;

// T extends (...args: any) => any는 T라는 타입을 함수로 제한하는 방법
// (...args: infer A) 에서 infer는 extends에서만 사용이 가능하며
// 타입스크립트에게 값을 추론하도록 만듭니다.
// [추론 조건] ? [성공 값] : [실패 값] 형태로 사용합니다.
type CustomParameters<T extends (...args: any) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

type CustomParams = CustomParameters<typeof zip>;

// 그럼 위를 응용해서 return타입을 받아와 볼까요?
type CustomReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type CustomReturn = CustomReturnType<typeof zip>;
