import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increasCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {" "}
        <button
          style={{ backgroundColor: "blue" }}
          onClick={this.increasCounter}
        >
          {this.props.buttonName}
        </button>
        <p> You are Customer No {this.state.count}</p>
      </div>
    );
  }
}
