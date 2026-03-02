# 1. Page Router 핵심 정리

## page route 소개

### \_app.tsx

APP 컴포넌트는 모든 페이지 컴포넌트들의 부모 역할을 하는 루트 컴포넌트

공통적으로 포함되는 header 컴포넌트나 layout을 랜더링하거나 비즈니스 로직을 작성하는 공간

### \_document.tsx

모든 페이지에 공통적으로 적용되어야하는 html 코드 설정하는 컴포넌트

### next.config.mjs

reactStrictMode false로 바꿔주기

## 페이지 라우팅 설정하기

1.  global.css 다 지우기, Home.module.css 파일 삭제하기, index.tsx 다 지우기
2.  query string: useRouter() 사용하기

## 네비게이팅

- Link 컴포넌트로 CSR방식의 link 생성
- Programmatic Navigation: 특정 버튼 클릭하거나 특정 조건 만족햇을 시 이동

## Pre-fetching(프리패칭)

현재 사용자가 보고 있는 웹 페이지에서, 이동할 수 있는 가능성 있는 모든 페이지의 JS 코드를 미리 불러와놓는 과정
