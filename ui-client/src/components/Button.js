import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.classStyle} onClick={this.props.onClick}>
        {this.props.searchById}
      </button>
    );
  }
}
