import React, { Component } from 'react';

class SearchButton extends Component {
    render() {
        return (
            <button className="btn btn-primary fn-submit-name" onClick={this.props.clickState} >{this.props.searchbut}</button>
        )
    };
};
export default SearchButton;