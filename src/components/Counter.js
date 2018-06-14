import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <p>Results  ({this.props.result.length} found)</p>
        )
    };
};
export default Counter;