import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increase}>{this.props.name}</button>
      </div>
    );
  }
}

export default Counter;
