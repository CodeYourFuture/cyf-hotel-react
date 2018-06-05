import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increasingCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increasingCounter}>{this.props.name}</button>
        <p>{this.state.count} booked</p>
      </div>
    );
  }
}
export default Counter;
