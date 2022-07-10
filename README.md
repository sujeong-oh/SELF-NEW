# Save Your Moment

- [사용](#사용)
- [공부](#공부)
- [레이아웃및기능](#레이아웃및기능)
- [구현](#구현)
- [멘토링](#)
- [트러블 슈팅](#트러블-슈팅)



## 사용

| -             |                                      |
|---------------|--------------------------------------|
| Lang          | typescript                           |
| Framework     | vscode                               |
| CSS framework | [tailwind](https://tailwindcss.com/) |


## 공부

- react 사용법
- tailwind 사용법
- redux
- react-route-dom
- 모션라이브러리
- API 삽입
- Grid
- 아이콘 삽입
- gnb
- hash link

## 레이아웃 및 기능

이미지 소스 : https://dribbble.com/shots/18525176-Travel-Agency-Landing-page

[PAGE 1]

![image](https://user-images.githubusercontent.com/101512811/176697684-dbe2eb87-a39c-4bcb-b6ac-6d80bd8d0dc4.png)

- Header / 홈버튼 누르면 홈으로 이동 
- 중간 내용
- Card (상단: 이미지, 하단: 날짜, 위치 / 세부내용은 안보이게)
- 추가 버튼 or 아이콘
- 사이드 바로 지역 및 분류하기 > V2
- 이미지 API 삽입
- 스와이프 기능 > 모션 라이브러리, V2


[PAGE 2]

![image](https://user-images.githubusercontent.com/101512811/176697768-25f13f4c-6cd1-4143-be11-6043aec088d5.png)

- Card 누르면 상세 페이지로 이동
- 지도 삽입(지도 API) > 군단위, 시단위? DATA 쌓기 필요
- 수정 / 저장 버튼 > 임시저장 버튼, redux, V2
- Grid, Placeholder 
- Home 버튼 (배너로고)
- 이미지 API or URL 삽입
- 배너에 달력 API / 분류 / 제목 > V2
- 일정 정리 기능 > V2
![image](https://user-images.githubusercontent.com/101512811/176699055-f65a4bdc-fcbe-433b-888f-9b28c70316a8.png)


## 구현

- 상단 아이콘 누르면 Home 이동
- Card 만들기 (이동 구현 X)
- BackgroundImg 삽입
- Add 버튼 누르면 Detail 로 이동
- 지도 삽입 (검색창 추가 등 부가적인 기능추가 필요)
- Grid 사용해서 Input 나누기
- Banner BackgroundImg 삽입
- 이미지 API 삽입
- 저장 버튼 (저장 기능 구현 X, Redux 필요)

## 멘토링

- Detail 에서 Home 으로 데이터를 불러오는 것 : redux
- Usestate 필요
- ...data : 배열 풀어주는 것
- BrowserRouter 와 Routes 사이에는 항상 위에 있어야 되는 것
- CSS까지 적용 후에 기능 구현
- 

## 트러블 슈팅 및 WIL

[[TBD](https://sooom2.tistory.com/28)]
새로 배운 것 / 틀린 것이 많아서 정리한 포스팅
