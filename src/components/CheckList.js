import React from "react";
class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: 0 };
  }
  boxChecked = () => {
    this.setState({ checked: this.state.checked + 1 });
  };
  render() {
    return (
      <div>
        <input type="checkbox" onClick={this.boxChecked} />one
        <input type="checkbox" onClick={this.boxChecked} />two
        <input type="checkbox" onClick={this.boxChecked} />three
        <p> Already {this.state.checked}booked out of 5</p>
      </div>
    );
  }
}
export default CheckList;
