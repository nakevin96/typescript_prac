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
