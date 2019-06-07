import React from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    // There is a bug in this component, where this.timer is not cleared if the
    // component is unmounted. It will continue to try to render if even the
    // component is no longer in the DOM.
    this.timer = setTimeout(this.tick, 1000);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

export default Clock;
