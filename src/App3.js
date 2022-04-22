import React from 'react';
import './App.css';

//class형 컴포넌트 사용
/*
-class형 컴포넌트 생성 : class 키워드를 사용하여 js 클래스 생성 → extends 사용하여 React.Component 상속받음
-사용법 : class 클래스명 extends React.Component
*/
/*
리액트 컴포넌트 : 함수형, 클래스형
-함수형
-클래스형 : render()가 반드시 있어야 함.
 └render()는 클래스형 컴포넌트에서 컴포넌트의 화면을 구성하기 위한 함수
 └state : 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 가지고 있는 객체, props와 비슷
 (*props와 차이점 : props의 경우 상위 컴포넌트에서 하위 컴포넌트로 데이터가 전달.
                   state는 해당 컴포넌트 내에서 관리)

-컴포넌트 구현하는 것과 사용하는 것을 분리하여 사용.
*/
/*
-setState() : state 객체가 가지고 있는 데이터를 수정하는 함수
-사용법 : setState(요소명 및 연산식)
*/
class App3 extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    // this.setState({ count: 1 }); 값을 1로 바꿈.
    // this.setState({ count: this.state.count + 1 }); //버튼 클릭함에 따라 숫자 증가
    //비동기 동작 보완 - 매개변수를 함수로
    this.setState((current) => ({
        count: current.count +1,
    }));
  };
  minus = () => {
    // this.setState({ count: -1 });
    // this.setState({ count: this.state.count - 1 }); //버튼 클릭함에 따라 숫자 감소
    this.setState((current) => ({
        count: current.count -1,
    }));
  };

  /*
-기본 함수 사용방식
add = function(){
    this.setState({count: this.state.count + 1});
};
*/

  render() {
    return (
      <div>
        <h1>클래스형 컴포넌트 사용하기</h1>
        <h3>state가 가지고 있는 count값 : {this.state.count}</h3>
        <button onClick={this.add}> + </button>
        <button onClick={this.minus}> - </button>
      </div>
    );
  }
}

export default App3;
