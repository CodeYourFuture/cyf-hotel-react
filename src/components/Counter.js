import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <p>{this.props.messageCounter}  ({this.props.result} found)</p>
        )
    };
};
export default Counter;