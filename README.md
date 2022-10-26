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

# <<<<<<< HEAD

<br />

> > > > > > > e223739 (Docs: README.md 수정)

## 데모 영상 or 배포 링크

[👉 배포 링크 👈](https://chaedie.github.io/simple-todo-list/)

<br />

## 사용 라이브러리

- React-router-dom
- SCSS
- React-Icons

  <br />

## 폴더 구조

```
📦src
 ┣ 📂Auth
 ┃ ┣ 📜Auth.tsx
 ┃ ┣ 📜AuthForm.scss
 ┃ ┗ 📜AuthForm.tsx
 ┣ 📂Todo
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Todo.scss
 ┃ ┃ ┣ 📜Todo.tsx
 ┃ ┃ ┣ 📜TodoInput.tsx
 ┃ ┃ ┗ 📜TodoUpdate.tsx
 ┃ ┗ 📜TodoList.tsx
 ┣ 📂api
 ┃ ┣ 📜api.ts
 ┃ ┣ 📜todo.ts
 ┃ ┗ 📜user.ts
 ┣ 📂models
 ┃ ┗ 📜TodoItem.ts
 ┣ 📂styles
 ┃ ┣ 📜common.scss
 ┃ ┗ 📜reset.scss
 ┣ 📜Router.tsx
 ┣ 📜index.tsx
 ┗ 📜utils.ts
```

# <<<<<<< HEAD

<br />
<br />

> > > > > > > e223739 (Docs: README.md 수정)

# 주요 기능

주요 기능의 코드 설명을 추가 하다보니 Todo폴더 내부 구조가 문제가 있음을 인지했습니다. 추후 개선할 에정입니다. 또한 axios 라이브러리에 interceptor 기능이 있다는걸 다른 개발자의 코드를 통해 확인했습니다. 해당 부분 사용해 볼 예정입니다.

## 로그인 / 회원가입

### 유효성 검사

<<<<<<< HEAD
`isValidEmail`, `isValidPassword`, `isSamePassword` 변수를 선언하여 `true | false`가 나오도록 할당

# `isValidInputs`라는 객체를 생성하여 `AuthType(login | signup)`에 따라 유효성 검사 통과 여부 `true | false` 반환

- `isValidEmail`, `isValidPassword`, `isSamePassword` 변수를 선언하여 `true | false`가 나오도록 할당

- `isValidInputs`라는 객체를 생성하여 `AuthType(login | signup)`에 따라 유효성 검사 통과 여부 `true | false` 반환
  > > > > > > > e223739 (Docs: README.md 수정)

```typescript
const isValidEmail = useMemo(() => email.includes('@'), [email]);
const isValidPassword = useMemo(() => password.length >= 8, [password]);
const isSamePassword = useMemo(() => password === passwordAgain, [password, passwordAgain]);

const isValidInputs: {
  [key: string]: boolean;
} = {
  login: isValidEmail && isValidPassword,
  signup: isValidEmail && isValidPassword && isSamePassword,
};
```

<<<<<<< HEAD

### 로그인 / 회원가입 http 통신

`authType`에 따라 `authUrl` 할당

`axios.post()` 메서드로 http 통신

`statusCode`가 400이면 해당 에러 메시지를 얼럿띄워주며 로그인페이지로 리다이렉트

`access_token`을 받으면 토큰을 로컬스토리지에 저장하며 `/todo`페이지로 이동

# 혹시 모를 예외 상황엔 얼럿을 띄워주며 로그인 페이지로 리다이렉트

<br />

### 로그인 / 회원가입 http 통신

- `authType`에 따라 `authUrl` 할당

- `axios.post()` 메서드로 http 통신

- `statusCode`가 400이면 해당 에러 메시지를 얼럿띄워주며 로그인페이지로 리다이렉트

- `access_token`을 받으면 토큰을 로컬스토리지에 저장하며 `/todo`페이지로 이동

- 혹시 모를 예외 상황엔 얼럿을 띄워주며 로그인 페이지로 리다이렉트
  > > > > > > > e223739 (Docs: README.md 수정)

```typescript
const handleSubmitAuth = async (e: React.SyntheticEvent) => {
  e.preventDefault();
  const authUrl = authType === 'login' ? `${baseUrl}/auth/signin` : `${baseUrl}/auth/signup`;
  const { data } = await axios.post(authUrl, { email, password });

  if (data.statusCode === 400) {
    alert(data.message);
    navigate('/');
    return;
  }
  if (data.access_token) {
    token.current = data.access_token;
    localStorage.setItem('token', token.current!);
    navigate('/todo');
    return;
  }
  alert('입력 정보를 확인해주세요.');
  navigate('/');
};
```

<<<<<<< HEAD

### 자동 로그인

# 로그인 페이지 마운트 시 토큰 값이 있으면 자동 로그인 되었다는 얼럿과 함께 `/todo`페이지로 이동

<br />

### 자동 로그인

- 로그인 페이지 마운트 시 토큰 값이 있으면 자동 로그인 되었다는 얼럿과 함께 `/todo`페이지로 이동
  > > > > > > > e223739 (Docs: README.md 수정)

```typescript
const token = useRef(localStorage.getItem('token'));

useEffect(() => {
  if (token.current) {
    alert('자동 로그인 되었습니다.');
    navigate('/todo');
  }
}, [navigate]);
```

# <<<<<<< HEAD

<br />
<br />

> > > > > > > e223739 (Docs: README.md 수정)

## To Do CRUD

### API 공통

<<<<<<< HEAD
`axios.create()`를 통해 `baseURL`, `headers`, `timeout`와 같은 공통 부분을 미리 할당

# `getAuthorization()`을 통해 `headers` 객체 중복 제거

- `axios.create()`를 통해 `baseURL`, `headers`, `timeout`와 같은 공통 부분을 미리 할당

- `getAuthorization()`을 통해 `headers` 객체 중복 제거
  > > > > > > > e223739 (Docs: README.md 수정)

```typescript
// @ /api/api.ts
export const baseUrl = 'https://pre-onboarding-selection-task.shop';

export const http = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000,
});

export function getAuthorization(token: string | null) {
  return { Authorization: `Bearer ${token}` };
}
```

<<<<<<< HEAD

### Create

`todoInput` state의 값을 body에 담아 `postTodo()`로 http 통신

`try-catch`로 담았으나 `axios.post().then().catch()`와의 차이점은 학습이 필요
(Promise객체의 catch를 통해서 충분히 에러 핸들링이 가능하다면 굳이 가독성 나쁜 try-catch문을 사용하지 않아도 될것 같습니다.)
=======
<br />

### Create

- `todoInput` state의 값을 body에 담아 `postTodo()`로 http 통신

- `try-catch`로 담았으나 `axios.post().then().catch()`와의 차이점은 학습이 필요
  (Promise객체의 catch를 통해서 충분히 에러 핸들링이 가능하다면 굳이 가독성 나쁜 try-catch문을 사용하지 않아도 될것 같습니다.)
  > > > > > > > e223739 (Docs: README.md 수정)

```typescript
// @ /Todo/TodoList.tsx
const appendTodo = useCallback(
  (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    todoInputRef.current!.focus();
    if (todoInput === '') return;

    const fetchData = async () => {
      const data = await postTodo(token, { todo: todoInput });
      setTodoList(prev => [...prev, data]);
    };
    fetchData();
    setTodoInput('');
  },
  [todoInputRef, todoInput, token]
);
// @ /api/todo.ts
export async function postTodo(token: string | null, bodyData: { todo: string }) {
  try {
    const res = await http.post('/todos', bodyData, { headers: getAuthorization(token) });
    if (res.status === 201) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}
```

# <<<<<<< HEAD

<br />

> > > > > > > e223739 (Docs: README.md 수정)

### Read

```typescript
// @ /Todo/TodoList.tsx
useEffect(() => {
  if (token) {
    const fetchData = async () => {
      const data = await getTodoList(token);
      setTodoList([...data]);
    };
    fetchData();
  } else {
    navigate('/');
  }
}, [token, navigate]);

// @ /api/todo.ts
export async function getTodoList(token: string | null) {
  try {
    const res = await http.get('/todos', { headers: getAuthorization(token) });
    if (res.status === 200) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}
```

# <<<<<<< HEAD

<br />

> > > > > > > e223739 (Docs: README.md 수정)

### Update

```typescript
// @ /Todo/components/TodoUpdate.tsx
const updateTodo = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const fetchData = async () => {
    const { id, todo, isCompleted } = updateTodoInfo;
    const data = await putTodo(token, { id, todo, isCompleted });
    const newTodoList = todoList.map((todoItem: TodoItem) => (todoItem.id === data.id ? data : todoItem));
    setTodoList([...newTodoList]);
  };
  fetchData();
  setIsClickedUpdate(false);
};

// @ /api/todo.ts
export async function putTodo(token: string | null, bodyData: { id: number; todo: string; isCompleted: boolean }) {
  try {
    const res = await http.put(`todos/${bodyData?.id}`, bodyData, { headers: getAuthorization(token) });
    if (res.status === 200) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}
```

# <<<<<<< HEAD

<br />

> > > > > > > e223739 (Docs: README.md 수정)

### Delete

```typescript
// @ /Todo/components/Todo.tsx
const handleDeleteTodo = () => {
  const fetchData = async () => {
    if (token) {
      await deleteTodo(token, { id: todoItem.id });
      const newTodoList = todoList.filter(x => x.id !== todoItem.id);
      setTodoList([...newTodoList]);
    }
  };

  fetchData();
  setIsClickedDelete(false);
};

// @ /api/todo.ts
export async function deleteTodo(token: string | null, bodyData: { id: number }) {
  try {
    const res = await http.delete(`/todos/${bodyData?.id}`, { headers: getAuthorization(token) });
    if (res.status === 204) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}
```

# <<<<<<< HEAD

<br />

> > > > > > > e223739 (Docs: README.md 수정)

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

# <<<<<<< HEAD

  <br />

> > > > > > > e223739 (Docs: README.md 수정)

## Axios 적용 과정

- [Fetch => Axios 적용 ](https://chaedies-dev-log.tistory.com/entry/Reactjs-to-do-app-fetch-Axios-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EA%B3%BC%EC%A0%95)

# <<<<<<< HEAD

  <br />

> > > > > > > e223739 (Docs: README.md 수정)

## 향후 로드맵

- src/Todo 이하의 폴더 구조 변경
- axios의 interceptor 기능 학습 및 적용
- Redux 라이브러리 적용
