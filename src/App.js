import './App.css';
import Info from './info';
import Address from './address';

/*
문제 1) 컴포넌트 component.js 파일 생성 → 자신의 정보 출력하는 페이지를 화면 출력
-src 폴더 아래 info.js 생성
-출력 정보 : 이름, 성별, 나이, 이메일, 주소
-UI : 화면 구성은 자유

문제 2) 친구 정보 출력하는 컴포넌트 address.js 파일 생성 → 정보 출력하는 페이지를 화면 출력
-src / address.js
-정보 : 이름, 성별, 이메일
-조건 : 친구 2명 이상. props 사용해 하위 컴포넌트로 전달하여 출력
*/

function App() {
  return (
    <div>
      <h1>Profile</h1>
      <Info />
      {/* <Address data1={{ name: 'Hong-gildong', sex: 'male', email: 'hong@gmail.com' }} />
      <Address data2={{ name: 'Duli', sex: 'male', email: 'duli@gmail.com' }} /> */}
      <Address name="Hongildong" sex="male" email="hong@gmail.com" />
      <Address name="Duli" sex="male" email="duli@gmail.com" />
      {/* <Address type="SEX" data1="male" />
      <Address type="ADDRESS" data1="" /> */}
    </div>
  );
}

export default App;
