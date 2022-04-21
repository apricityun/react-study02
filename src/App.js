import './App.css';
import { Info, Info2 } from './info';
import { Address, Addr } from './address';
import './App.css';

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
      {/* <Info2 /> */}
      {/* <Address data1={{ name: 'Hong-gildong', sex: 'male', email: 'hong@gmail.com' }} />
      <Address data2={{ name: 'Duli', sex: 'male', email: 'duli@gmail.com' }} /> */}
      <Address name="Hongildong" sex="male" email="hong@gmail.com" />
      <Address name="Duli" sex="male" email="duli@gmail.com" />
      {/* <Addr name="아이유" gender="여성" email="ui@gmail.com" />
      <Addr name="유재석" gender="남성" email="you@gmail.com" /> */}
    </div>
  );
}

export default App;
