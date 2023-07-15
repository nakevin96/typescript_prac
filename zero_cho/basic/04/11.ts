interface Axios {
  get(): void;
}

class CustomError extends Error {
  response?: {
    data: any;
  };
}

declare const axios: Axios;

(async () => {
  try {
    await axios.get();
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      console.error(error.response?.data);
    }
  }
})();

// utility types
interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const yoon = {
  name: "yoon",
  age: 28,
  married: true,
};

// Partial은 뒤에 나오는 타입에 속한 모든 key값을 optional로 변경
// 직접 만들어 보자.

type CustomPartial<T> = {
  [K in keyof T]?: T[K];
};

const newYoon: CustomPartial<Profile> = {
  name: "yoon",
  age: 28,
};

// 정답
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

// 이번에는 Pick을 알아봅시다.
// Pick은 타입에서 일부만 가져옵니다. 이걸 Custom으로 바꿔봅시다.
const pickYoon: Pick<Profile, "name" | "age"> = {
  name: "yoon",
  age: 28,
};

type CustomPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const customPickYoon: CustomPick<Profile, "name" | "age"> = {
  name: "yoon",
  age: 28,
};

// Omit은 타입에서 특정 요소만 제거합니다. 이것도 Custom으로 만들어 봅시다.
const omitYoon: Omit<Profile, "married"> = {
  name: "yoon",
  age: 28,
};

// type Exclude<T, U> = T extends U ? never : T;
// X extends keyof any는 X가 key가 될 수 있는 string, number, symbol만 들어올 수 있게 하겠다는 의미
type CustomOmit<T, X extends keyof any> = Pick<T, Exclude<keyof T, X>>;

const customOmitYoon: CustomOmit<Profile, "married"> = {
  name: "yoon",
  age: 28,
};
