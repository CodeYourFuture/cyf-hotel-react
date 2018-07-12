import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <p>{this.props.messageCounter}  ({this.props.resultLength} found)</p>
        )
    };
};
export default Counter;