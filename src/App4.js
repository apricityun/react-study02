import React from 'react';
import './App.css';

class App4 extends React.Component {
    //실제로 var state = {...} 형태
  state = {
    ch: 1,
    vol: 0,
  };

  volAdd = () => {
    // if (this.state.vol < 15) {
    //   this.setState({ vol: this.state.vol + 1 });
    // } else {
    //   console.log({ vol: this.state.vol });
    // }
    //간단하게
    // this.setState({ vol: this.state.vol + 1 });
    // if (this.state.vol > 14) {
    //   this.setState({ vol: 15 });
    // }
    //비동기 방식 단점 보완
    this.setState((current) => ({
      vol: current.vol + 1,
    }));
    if (this.state.vol > 14) {
      this.setState(() => ({
        vol: 15,
      }));
    }
  };

  volMinus = () => {
    // if (this.state.vol > 0) {
    //   this.setState({ vol: this.state.vol - 1 });
    // } else {
    //   console.log({ vol: this.state.vol });
    // }
    //간단하게
    // this.setState({ vol: this.state.vol - 1 });
    // if (this.state.vol < 1) {
    //   this.setState({ vol: 0 });
    // }
    //비동기 방식 단점 보완
    this.setState((current) => ({
      vol: current.vol - 1,
    }));
    if (this.state.vol < 1) {
      this.setState(() => ({
        vol: 0,
      }));
    }
  };

  //채널
  chAdd = () => {
    // if (this.state.ch > 14) {
    //   this.setState({ ch: 1 });
    // } else if (this.state.ch < 0) {
    //   this.setState({ ch: 15 });
    // } else {
    //   this.setState({ ch: this.state.ch + 1 });
    // }
    //간단하게
    // this.setState({ ch: this.state.ch + 1 });
    this.setState((current) => ({
      ch: current.ch + 1,
    }));
    if (this.state.ch > 14) {
      this.setState(() => ({
        ch: 1,
      }));
    }
  };

  chMinus = () => {
    // if (this.state.ch > 14) {
    //   this.setState({ ch: 1 });
    // } else if (this.state.ch < 1) {
    //   this.setState({ ch: 15 });
    // } else {
    //   this.setState({ ch: this.state.ch - 1 });
    // }
    //간단
    // this.setState({ ch: this.state.ch - 1 });
    this.setState((current) => ({
      ch: current.ch - 1,
    }));
    if (this.state.ch <= 1) {
      this.setState(() => ({
        ch: 15,
      }));
    }
  };

  render() {
    return (
      <div>
        <h1> 리모컨 </h1>
        <h3>현재 채널 : {this.state.ch}</h3>
        <h3>현재 볼륨 : {this.state.vol}</h3>
        <p>------------------------------</p>
        <p>
          채널
          <button onClick={this.chAdd}> + </button>
          <button onClick={this.chMinus}> - </button>
        </p>
        <p>
          볼륨
          <button onClick={this.volAdd}> + </button>
          <button onClick={this.volMinus}> - </button>
        </p>
      </div>
    );
  }
}

export default App4;
