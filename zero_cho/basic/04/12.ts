// utility types
interface Profile {
  name?: string;
  age?: number;
  married?: boolean;
}

// Required는 optional을 반드시 받아야 하도록 변경시켜줌
const yoon: Required<Profile> = {
  name: "yoon",
  age: 28,
  married: true,
};

// ?는 optional인데 -?를 하면 optional을 제거하라는 의미
type CustomRequired<T> = {
  [R in keyof T]-?: T[R];
};

const customRequiredYoon: CustomRequired<Profile> = {
  name: "yoon",
  age: 28,
  married: true,
};

// 현재는 이렇게 수정이 되는데 이를 못하게 하기 위해서 ReadOnly라는 것이 존재
customRequiredYoon["name"] = "hi";

const readOnlyYoon: Readonly<CustomRequired<Profile>> = {
  name: "yoon",
  age: 26,
  married: false,
};

//readOnlyYoon["married"] = true;

type CustomReadonly<T> = {
  // -readonly로 존재하는 readonly 제거도 가능
  readonly [K in keyof T]: T[K];
};

const customReadOnlyYoon: CustomReadonly<CustomRequired<Profile>> = {
  name: "yoon",
  age: 26,
  married: false,
};

//customReadOnlyYoon['name'] = 'hi';

// 특정 타입에서 null, undefined를 제거하고 싶을 때
type ComplecateType = number | string | boolean | symbol | undefined | null;
type NonNullType = NonNullable<ComplecateType>;

export {};
