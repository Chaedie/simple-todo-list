# 원티드 프리온보딩 프론트엔드 - 선발 과제

해당 저장소는 "원티드 프리온보딩 프론트엔드 코스" 선발 과제 제출용 저장소입니다.

## 프로젝트 실행 법

```
npm install
npm start
```

## 주요 기능

1. 로그인 / 회원가입
2. 할 일 등록 / 조회 / 수정 / 삭제

## 데모 영상 or 배포 링크

[👉 배포 링크 👈](https://chaedie.github.io/wanted-pre-onboarding-fe-7/)

## 사용 라이브러리

- React-router-dom
- SCSS
- React-Icons

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

### 문제 해결 과정

- [Delete 통신 시 발생하는 "Undexpected end of JSON input" 에러](https://chaedies-dev-log.tistory.com/entry/Reactjs-delete-fetch-%EC%8B%9C-Undexpected-end-of-JSON-input)
- [gh-pages 배포 과정](https://chaedies-dev-log.tistory.com/entry/Reactjs-Github-Page%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%B0%ED%8F%AC)

### 타입 스크립트 적용 과정

- [react-todo-app에 TypeScript 적용하기](https://velog.io/@im_chaedong/react-todo-app%EC%97%90-TypeScript-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
- [@types/to-do-app 에러 노트 (1)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%EB%85%B8%ED%8A%B8-1)
- [@types/to-do-app 에러 해결 과정 (2)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-2)
- [@types/to-do-app 에러 해결 과정 (3)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-3)
- [@types/to-do-app 에러 해결 과정 (4)](https://velog.io/@im_chaedong/typesto-do-app-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95-4)
