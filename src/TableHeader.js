import React, { Component } from "react";

export default class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColumnSorted: false
    };
  }

  handleClick = e => {
    this.props.sortColumn(this.props.columnKey, this.state.isColumnSorted);
    this.setState({ isColumnSorted: !this.state.isColumnSorted });
  };

  render() {
    return (
      <th onClick={this.handleClick} key={this.props.columnKey} scope="col">
        {this.props.title}
      </th>
    );
  }
}
