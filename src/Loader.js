import React from "react";

export default class Loader extends React.Component {
  state = {
    dotCount: 0,
  };

  changeDot = () => {
    this.setState({ dotCount: (this.state.dotCount + 1) % 3 })
  };

  getDots = () => {
    let str = "";
    for (let i = 0; i <= this.state.dotCount; i++) {
      str += ".";
    }
    return str;
  };

  _interval = null;

  componentDidMount() {
    this._interval = setInterval(() => this.changeDot(), 300);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return "Loading" + this.getDots();
  }
}