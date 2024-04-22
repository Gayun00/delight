## 프로젝트

### ✅ Command
로컬 서버 실행: `yarn dev`

스토리북 로컬 실행: `yarn storybook`

<br>

### ✅ 기능 구현
|초기 로딩 화면|탭 젼환|
|--|--|
|![2024-04-224 02 56-ezgif com-video-to-gif-converter](https://github.com/Gayun00/delight/assets/67543454/7c6f02e1-3be0-4e43-8b19-5b20c06644ca)|![2024-04-224 03 11-ezgif com-video-to-gif-converter](https://github.com/Gayun00/delight/assets/67543454/dd8abf73-455f-4353-8a25-67f02bd0913a)|

<br>


### ✅ 기술 스택
프레임워크 및 언어
- React + Vite + Typescript

테스트
- Vitest + React-Testing-Library
- Storybook

상태관리 및 데이터 비동기 로직
- React-Query

기타 UI 라이브러리
- ShadCn/UI

<br>

### ✅ Point
- **Suspense와 ErrorBoundary, QueryErrorResetBoundary를 사용한 선언적인 비동기 로직 관리**

- **코드스플리팅 및 Skeleton UI를 사용해 초기 로드 단계 사용자 경험 고려**
  
- **재사용성과 확장성이 높은 컴포넌트 구조 설계**
  - Storybook을 활용한 컴포넌트 문서화
  - <img width="577" alt="스크린샷 2024-04-22 오후 5 01 32" src="https://github.com/Gayun00/delight/assets/67543454/eb8b664b-f241-4a64-bd6a-0af86dab61f6">
  - UI를 담당하는 독립적인 컴포넌트 설계 및 CDD 진행
  - 필요에 따라 HOC와 compound component 패턴을 선택해 작업
 
- **util 함수 작성 및 unit test를 통한 로직 검증**
  - JSdocs를 작성해 함수별 목적 및 역할을 제 3자가 쉽게 파악하도록 함
  - pre-commit으로 작성한 테스트를 통과해야 추가 작업을 이어갈 수 있도록 해 사이드이펙트 방지
  - test-util 공통 함수 작성
  
- **컴포넌트 테스트를 통한 컴포넌트 내 UI 검증**
  
- **MSW와 fetch 랩핑 공통 로직, react-query 훅 랩핑함수를 선언해 사용하여 실제 api 호출과 동일한 형태의 비즈니스 로직 작성**
  - mockdata를 사용하되 실제 api 호출과 동일하게 코드를 작성하기 위해 msw를 사용 - 쿼리파리미터를 통한 데이터 조회 
  - api 호출 로직을 캡슐화하여 http 메서드별 모듈화된 구조를 만들어 재사용성 향상
  - 제네릭 타입을 사용해 요청과 응답의 타입을 명시함으로써 안전하고 예측가능한 코드 작성
  - 실무 래벨에서의 인증 토큰관리 등에 api 호출시 대응해야하는 사항에 대한 유언성과 확장성 고려

<br>


### ✅ Notice
- **'오늘 날짜' 지정**: 차트 내 데이터 표시를 위해 임의의 특정 날짜(2024-06-30)를 애플리케이션을 실행한 당일로 설정했습니다.
- **입출금 내역 알림 기능**:
  - 관련 별도 api 혹은 SSE를 사용할 수 없으므로 과제 범위에 한해 상황 가정
  - 가장 최신 거래 내역 일자가 당일에 해당할 경우 최신 입출금 발생한 겻으로 가정하여 작업했습니다.
- **차트 데이터**:
  - 일자별 거래내역 총합 or 각 시간별 거래내역 표시: 일주일간의 일자별 거래내역 데이터를 표시하는 것으로 이해했으나, UI상에는 일자별 시간 데이터까지 나와있음
  - '일자별' 거래 내역의 총합을 구해 표시하고 시간은 00:00로 통일해 표시
  - '시간별' 거래 내역 데이터를 표시할 경우의 데이터를 처리하는 util함수 로직도 별도로 작성해두었습니다.

<br>

### ✅ Task
github issue 생성을 통해 task를 관리하고, 관련 PR에 연결해 히스토리를 관리할 수 있도록 했습니다.
