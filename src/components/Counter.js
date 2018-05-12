import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState({
      count: ++this.state.count
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increase}>{this.props.name}</button>
        <p>{this.state.count} booked</p>
      </div>
    );
  }
}

export default Counter;
