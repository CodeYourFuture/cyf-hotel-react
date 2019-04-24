import React, { Component } from "react";


class RestaurantButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<button onClick={this.props.order} className="btn btn-primary">Add</button>)

    }
}


export default RestaurantButton;