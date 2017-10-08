import React from 'react';

class Button extends React.Component {
  render() {
    return <button className="btn btn-primary fn-submit-name">{this.props.name}</button>  
  }
}

export default Button;
