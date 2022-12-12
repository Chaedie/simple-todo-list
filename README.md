# To do App

[👉 배포 링크 👈](https://chaedie.github.io/simple-todo-list/)

![투두-로그인](https://user-images.githubusercontent.com/88099590/203834354-351b3941-a260-44d9-8187-367b2245bc18.gif)

![투두-CRUD](https://user-images.githubusercontent.com/88099590/203834370-68fd5cb3-c250-490a-ade9-cf66d8414836.gif)

<br />

## 기술 스택

- TypeScript
- Axios, ContextAPI
- MUI, Emotion

  <br />

## 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜AuthService.ts
 ┃ ┣ 📜TodoService.ts
 ┃ ┗ 📜index.ts
 ┣ 📂components
 ┃ ┣ 📂Auth
 ┃ ┃ ┗ 📜AuthForm.tsx
 ┃ ┣ 📂Layout
 ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜DeleteTodo.tsx
 ┃ ┃ ┣ 📜TodoInput.tsx
 ┃ ┃ ┣ 📜TodoItem.tsx
 ┃ ┃ ┣ 📜TodoList.tsx
 ┃ ┃ ┗ 📜UpdateTodo.tsx
 ┃ ┗ 📂common
 ┃ ┃ ┗ 📜Header.tsx
 ┣ 📂contexts
 ┃ ┗ 📜TodoListContext.ts
 ┣ 📂hooks
 ┃ ┣ 📜useAutoLogin.ts
 ┃ ┣ 📜useFetch.ts
 ┃ ┣ 📜useForm.ts
 ┃ ┗ 📜useHandleToken.ts
 ┣ 📂model
 ┃ ┗ 📜Todo.ts
 ┣ 📂pages
 ┃ ┣ 📜AuthPage.tsx
 ┃ ┗ 📜TodoPage.tsx
 ┣ 📜App.tsx
 ┣ 📜Router.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

<br />
<br />

# 개발 일지

1. React.js로 구현
2. TypeScript로 마이그레이션
3. Fetch => Axios 적용
4. ContextAPI 적용
5. MUI 적용을 위해 프로젝트 재구현 (TypeScript, Axios, ContextAPI)

### 문제 해결 과정

- [Delete 통신 시 발생하는 "Unexpected end of JSON input" 에러](https://chaedies-dev-log.tistory.com/entry/Reactjs-delete-fetch-%EC%8B%9C-Undexpected-end-of-JSON-input)
- [gh-pages 배포 과정](https://chaedies-dev-log.tistory.com/entry/Reactjs-Github-Page%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%B0%ED%8F%AC)

### 타입 스크립트 적용 과정

- [Todo App 타입스크립트 마이그레이션 (1)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%EB%85%B8%ED%8A%B8-1)
- [Todo App 타입스크립트 마이그레이션 (2)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-2)
- [Todo App 타입스크립트 마이그레이션 (3)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-3)
- [Todo App 타입스크립트 마이그레이션 (4)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-4)

### Axios 적용 과정

- [Fetch => Axios 적용](https://chaedies-dev-log.tistory.com/entry/Reactjs-to-do-app-fetch-Axios-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EA%B3%BC%EC%A0%95)
