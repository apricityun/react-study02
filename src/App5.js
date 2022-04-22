import React from 'react';
import './App.css';

class App5 extends React.Component {
  //constructor(생성자)
  constructor(props) {
    super(props);
    console.log('construct 실행');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  minus = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  //생명주기 관련 메서드들
  componentDidMount() {
    console.log('componentDidMount PLAY');
  }

  render() {
    console.log('render 동작');
    return (
      <div>
        <h1>number : {this.state.count}</h1>
        <button onClick={this.add}> + </button>
        <button onClick={this.minus}> - </button>
      </div>
    );
  }
}
export default App5;
