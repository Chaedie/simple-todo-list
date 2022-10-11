# 원티드 프리온보딩 프론트엔드 - 선발 과제

해당 저장소는 "원티드 프리온보딩 프론트엔드 코스" 선발 과제 제출용 저장소입니다.

## 프로젝트 실행 법

```
npm install
npm start
```

## 주요 기능
1) 로그인 / 회원가입
2) 할 일 등록 / 조회 / 수정 / 삭제

## 데모 영상 or 배포 링크

[👉 배포 링크 👈](https://chaedie.github.io/wanted-pre-onboarding-fe-7/)

## 사용 라이브러리

- React-router-dom
- SCSS
- React-Icons

## 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜api.js
 ┃ ┣ 📜todo.js
 ┃ ┗ 📜user.js
 ┣ 📂Auth
 ┃ ┣ 📜Auth.js
 ┃ ┣ 📜AuthForm.js
 ┃ ┗ 📜AuthForm.scss
 ┣ 📂styles
 ┃ ┣ 📜common.scss
 ┃ ┗ 📜reset.scss
 ┣ 📂Todo
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜TodoInput.js
 ┃ ┃ ┣ 📜TodoItem.js
 ┃ ┃ ┣ 📜TodoItem.scss
 ┃ ┃ ┗ 📜TodoUpdate.js
 ┃ ┗ 📜Todo.js
 ┣ 📜index.js
 ┣ 📜Router.js
 ┗ 📜utils.js
```

### 문제 해결 과정
- [Delete 통신 시 발생하는 "Undexpected end of JSON input" 에러](https://chaedies-dev-log.tistory.com/entry/Reactjs-delete-fetch-%EC%8B%9C-Undexpected-end-of-JSON-input)
- [gh-pages 배포 과정](https://chaedies-dev-log.tistory.com/entry/Reactjs-Github-Page%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%B0%ED%8F%AC)
