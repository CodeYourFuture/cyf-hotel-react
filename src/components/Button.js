import React, { Component } from 'react';

class Button extends Component {
    render(){
        return <button onClick={this.props.bookingsById} className="btn btn-primary fn-submit-name">{this.props.name}</button>;
    }
}

export default Button;
