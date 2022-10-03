# 원티드 프리온보딩 프론트엔드 - 선발 과제

해당 저장소는 "원티드 프리온보딩 프론트엔드 코스" 선발 과제 제출용 저장소입니다.

## 프로젝트 실행 법

```
npm install
npm start
```

## 데모 영상 or 배포 링크

## 사용 라이브러리

- React-router-dom
- SCSS
- React-Icons

## 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜todo.js
 ┃ ┗ 📜user.js
 ┣ 📂Auth
 ┃ ┣ 📜Auth.js
 ┃ ┣ 📜Auth.scss
 ┃ ┣ 📜AuthForm.js
 ┃ ┗ 📜AuthForm.scss
 ┣ 📂styles
 ┃ ┣ 📜common.scss
 ┃ ┗ 📜reset.scss
 ┣ 📂Todo
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜TodoInput.js
 ┃ ┃ ┣ 📜TodoItem.js
 ┃ ┃ ┗ 📜TodoItem.scss
 ┃ ┗ 📜Todo.js
 ┣ 📜api.js
 ┣ 📜index.js
 ┣ 📜Router.js
 ┗ 📜utils.js
```

### API

# API

## 스펙

## 1) Auth

---

## 1-1) SignUp

### 요청

- URL: `/auth/signup`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
}
```

## 1-2) SignIn

### 요청

- URL: `/auth/signin`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
}
```

## 2) Todo

## 2-1) createTodo

### 요청

- URL: `/todos`
- Method: `POST`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string

### 응답 예시

- status: 201 Created

```json
{
  "id": 1,
  "todo": "과제하기",
  "isCompleted": false
  "userId": 1,
}
```

## 2-2) getTodos

### 요청

- URL: `/todos`
- Method: `GET`
- Headers:
  - Authorization: `Bearer access_token`

### 응답 예시

- status: 200 OK

```json
[
  {
    "id": 1,
    "todo": "todo2",
    "isCompleted": false,
    "userId": 1
  },
  {
    "id": 2,
    "todo": "todo3",
    "isCompleted": false,
    "userId": 1
  }
]
```

## 2-3) updateTodo

### 요청

- URL: `/todos/:id`
- Method: `PUT`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string
  - isCompleted: boolean

### 응답 예시

- status: 200 OK

```json
{
  "id": 1,
  "todo": "Hello World",
  "isCompleted": true,
  "userId": 2
}
```

## 2-4) deleteTodo

### 요청

- URL: `/todos/:id`
- Method: `DELETE`
- Headers:
  - Authorization: `Bearer access_token`
