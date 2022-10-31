- [to-do-app](#to-do-app)
  - [프로젝트 실행 법](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%A4%ED%96%89-%EB%B2%95)
  - [데모 영상 or 배포 링크](#%EB%8D%B0%EB%AA%A8-%EC%98%81%EC%83%81-or-%EB%B0%B0%ED%8F%AC-%EB%A7%81%ED%81%AC)
  - [사용 라이브러리](#%EC%82%AC%EC%9A%A9-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC)
  - [폴더 구조](#%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0)
- [주요 기능](#%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5)
  - [로그인 / 회원가입](#%EB%A1%9C%EA%B7%B8%EC%9D%B8--%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85)
    - [유효성 검사](#%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC)
    - [로그인 / 회원가입 http 통신](#%EB%A1%9C%EA%B7%B8%EC%9D%B8--%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-http-%ED%86%B5%EC%8B%A0)
    - [자동 로그인](#%EC%9E%90%EB%8F%99-%EB%A1%9C%EA%B7%B8%EC%9D%B8)
  - [To Do CRUD](#to-do-crud)
    - [API 공통](#api-%EA%B3%B5%ED%86%B5)
    - [Create](#create)
    - [Read](#read)
    - [Update](#update)
    - [Delete](#delete)
- [개발 일지](#%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)
  - [문제 해결 과정](#%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95)
  - [타입 스크립트 적용 과정](#%ED%83%80%EC%9E%85-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A0%81%EC%9A%A9-%EA%B3%BC%EC%A0%95)
  - [Axios 적용 과정](#axios-%EC%A0%81%EC%9A%A9-%EA%B3%BC%EC%A0%95)
  - [향후 로드맵](#%ED%96%A5%ED%9B%84-%EB%A1%9C%EB%93%9C%EB%A7%B5)

# to-do-app

간단한 To Do List App 입니다.

<br />

## 프로젝트 실행 법

```
npm install
npm start
```

<br />

## 데모 영상 or 배포 링크

[👉 배포 링크 👈](https://chaedie.github.io/simple-todo-list/)

<br />

## 사용 라이브러리

- React-router-dom
- SCSS, React-Icons
- Axios

  <br />

## 폴더 구조

```
📦src
 ┣ 📂Auth
 ┃ ┣ 📜Auth.tsx
 ┃ ┣ 📜AuthForm.scss
 ┃ ┗ 📜AuthForm.tsx
 ┣ 📂Todo
 ┃ ┣ 📜Item.tsx
 ┃ ┣ 📜Todo.scss
 ┃ ┣ 📜TodoInput.tsx
 ┃ ┣ 📜TodoList.tsx
 ┃ ┣ 📜TodoStore.tsx
 ┃ ┗ 📜TodoUpdate.tsx
 ┣ 📂api
 ┃ ┣ 📜TodoService.ts
 ┃ ┣ 📜api.ts
 ┃ ┗ 📜user.ts
 ┣ 📂hooks
 ┃ ┗ 📜useRedirectToMain.ts
 ┣ 📂models
 ┃ ┗ 📜TodoItem.ts
 ┣ 📂styles
 ┃ ┣ 📜common.scss
 ┃ ┗ 📜reset.scss
 ┣ 📜Router.tsx
 ┣ 📜index.tsx
 ┗ 📜utils.ts
```

<br />
<br />

# 주요 기능

## 로그인 / 회원가입

### 유효성 검사

- `isValidEmail`, `isValidPassword`, `isSamePassword` 변수를 선언하여 `true | false`가 나오도록 할당

- `isValidInputs`라는 객체를 생성하여 `AuthType(login | signup)`에 따라 유효성 검사 통과 여부 `true | false` 반환

```typescript
const isValidEmail = useMemo(() => email.includes('@'), [email]);
const isValidPassword = useMemo(() => password.length >= 8, [password]);
const isSamePassword = useMemo(
  () => password === passwordAgain,
  [password, passwordAgain]
);

const isValidInputs: {
  [key: string]: boolean;
} = {
  login: isValidEmail && isValidPassword,
  signup: isValidEmail && isValidPassword && isSamePassword,
};
```

<br />

### 로그인 / 회원가입 http 통신

- `isLoginPage`에 따라 `authUrl` 할당

- `access_token`을 받으면 토큰을 로컬스토리지에 저장하며 `/todo`페이지로 이동

- `statusCode`가 400이면 해당 에러 메시지를 얼럿, 이외의 오류에도 얼럿

```typescript
const handleSubmitAuth = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const authUrl = isLoginPage ? URLS.LOGIN : URLS.SIGNUP;
  await postAuth(authUrl, { email, password }, navigate);
};
```

```typescript
export async function postAuth(
  authUrl: string,
  { email, password }: authInputs,
  navigate: Function
) {
  try {
    const res = await http.post(authUrl, { email, password });
    if (res.data.access_token) {
      localStorage.setItem('token', res.data.access_token);
      navigate('/todo');
      return;
    }

    throw new Error('API통신 실패');
  } catch (error: any) {
    if (error.response.status === 400) {
      alert(error.response.data.message);
    } else {
      alert('입력 정보를 확인해주세요.');
    }
    console.error(error.message);
  }
}
```

<br />

### 자동 로그인

- 로그인 페이지 마운트 시 토큰 값이 있으면 자동 로그인 되었다는 얼럿과 함께 `/todo`페이지로 이동

```typescript
useEffect(() => {
  if (localStorage.getItem('token')) {
    alert('자동 로그인 되었습니다.');
    navigate('/todo');
  }
}, [navigate]);
```

<br />
<br />

## To Do CRUD

### API 공통

- `axios.create()`를 통해 `baseURL`, `headers`, `timeout`와 같은 공통 부분을 미리 할당, `interceptors` 기능을 통해 `request.headers.Authorization`에 토큰을 가져와서 보내도록 설정

```typescript
// @ /api/api.ts

const baseURL = process.env.REACT_APP_BASE_URL;

export const URL = {
  LOGIN: '/auth/signin',
  SIGNUP: '/auth/signup',
};

export const http = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000,
});

http.interceptors.request.use(req => {
  if (req.headers) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  return req;
});
```

### Create

- `todoInput` state의 값을 body에 담아 `postTodo()`로 http 통신

<br />

```typescript
// @ /Todo/TodoStore.tsx
const appendTodo = useCallback(
  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInputRef.current !== null) {
      todoInputRef.current.focus();
    }
    if (todoInput === '') return;

    const data = await TodoService.post({ todo: todoInput });
    setTodoList(prev => [...prev, data]);
    setTodoInput('');
  },
  [todoInputRef, todoInput]
);
```

```typescript
// @ /api/TodoService.ts
post: async function (bodyData: { todo: string }) {
  try {
    const res = await http.post('/todos', bodyData);
    if (res.status === 201) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
},
```

<br />

### Read

- `useFetch` 커스텀 훅을 이용하여 get Method 호출

```typescript
// @ /Todo/TodoStore.tsx
const { isLoading, errors } = useFetch(setTodoList, TodoService.get);

useRedirectToMain(token, navigate);
```

```typescript
// @/hooks/useFetch.ts
const useFetch = (
  setState: Dispatch<SetStateAction<any>>,
  apiCallback: Function
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleFetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await apiCallback();
      setState(data);
    } catch (error) {
      setErrors(true);
    } finally {
      setIsLoading(false);
    }
  }, [setState, apiCallback]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return { isLoading, errors };
};

export default useFetch;
```

```typescript
// @ /api/TodoService.ts
get: async function () {
  try {
    const res = await http.get('/todos');
    if (res.status === 200) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
},
```

<br />

### Update

```typescript
// @ /Todo/TodoUpdate.tsx
const updateTodo = useCallback(
  async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, todo, isCompleted } = updateTodoInfo;
    const data = await TodoService.put({ id, todo, isCompleted });
    const newTodoList = todoList.map((todoItem: TodoItem) =>
      todoItem.id === data.id ? data : todoItem
    );

    setTodoList([...newTodoList]);
    setIsClickedUpdate(false);
  },
  [updateTodoInfo, todoList, setTodoList, setIsClickedUpdate]
);
```

```typescript
// @ /api/TodoService.ts
put: async function (bodyData: { id: number; todo: string; isCompleted: boolean }) {
  try {
    const res = await http.put(`todos/${bodyData?.id}`, bodyData);
    if (res.status === 200) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
},
```

<br />

### Delete

```typescript
// @ /Todo/Item.tsx
const handleDeleteTodo = useCallback(async () => {
  await TodoService.delete({ id: todoItem.id });
  const newTodoList = todoList.filter(x => x.id !== todoItem.id);
  setTodoList([...newTodoList]);

  setIsClickedDelete(false);
}, [todoItem, todoList, setTodoList]);
```

```typescript
// @ /api/TodoService.ts
delete: async function (bodyData: { id: number }) {
  try {
    const res = await http.delete(`/todos/${bodyData?.id}`);
    if (res.status === 204) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
},
```

<br />

# 개발 일지

## 문제 해결 과정

- [Delete 통신 시 발생하는 "Undexpected end of JSON input" 에러](https://chaedies-dev-log.tistory.com/entry/Reactjs-delete-fetch-%EC%8B%9C-Undexpected-end-of-JSON-input)
- [gh-pages 배포 과정](https://chaedies-dev-log.tistory.com/entry/Reactjs-Github-Page%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%B0%ED%8F%AC)

## 타입 스크립트 적용 과정

- [react-todo-app에 TypeScript 적용하기](https://velog.io/@im_chaedong/react-todo-app%EC%97%90-TypeScript-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
- [@types/to-do-app 에러 노트 (1)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%EB%85%B8%ED%8A%B8-1)
- [@types/to-do-app 에러 해결 과정 (2)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-2)
- [@types/to-do-app 에러 해결 과정 (3)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-3)
- [@types/to-do-app 에러 해결 과정 (4)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-4)

  <br />

## Axios 적용 과정

- [Fetch => Axios 적용 ](https://chaedies-dev-log.tistory.com/entry/Reactjs-to-do-app-fetch-Axios-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EA%B3%BC%EC%A0%95)

  <br />

## Context API 적용 과정

## 향후 로드맵

- Redux 라이브러리 적용
- useForm Hooks 구현 및 적용
- useFetch Hooks 연구
