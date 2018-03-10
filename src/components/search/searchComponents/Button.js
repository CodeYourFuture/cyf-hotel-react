import React, { Component } from "react";

class Button extends Component {
    
    render() {
        return (
            <button className="btn btn-primary fn-submit-name" onClick={this.sayHello}>{this.props.name}</button>
        )
    }
}
export default Button