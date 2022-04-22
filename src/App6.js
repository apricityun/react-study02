import React from 'react';
import './App.css';

class App6 extends React.Component {
  state = {
    sec: 5,
    isLoading: true,
    movies: [],
  };

  //   secTime = () => {
  //     this.setState((sec) => ({
  //       sec: this.state.sec - 1,
  //     }));
  //   };

  render() {
    //state 객체의 isLoading 요소를 객체 분할 할당방식을 사용하여 isLoading 변수를 선언하고 데이터 할당
    const { isLoading, sec } = this.state;

    //변수 isLoading의 데이터 값에 따라서 화면에 출력하는 문구 변경. 삼한연산자.
    return <div>{isLoading ? `Loading... ${sec}` : 'We are ready'}</div>;
  }

  //render() 함수가 실행된 후 componentDidMount() 실행
  componentDidMount() {
    //1회용 타이머인 setTimeout() 사용해 5초 후 로딩이 끝나는 프로그램 실행
    //5초 후 state 객체의 요소인 isLoading의 값을 false로 변경
    setTimeout(() => {
      //if문 사용하여 값 확인하여 출력문 다르게 설정
      //   this.setState({ isLoading: false });
      this.setState({ sec: this.state.sec - 1 });
    }, 1000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.sec > 0) {
        this.setState({ sec: this.state.sec - 1 });
        //sec 값이 변경되면 updating
      } else {
        this.setState({ isLoading: false });
      }
    }, 1000);
  }
}

export default App6;
