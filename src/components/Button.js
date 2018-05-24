import React from "react";

// const Button = props => {
//   return (
//     <button className="btn btn-primary fn-submit-name">{props.name}</button>
//   );
// };

class Button extends React.Component {
  render() {
    return <button className="btn btn-primary fn-submit-name" onClick={this.props.bookingsById}>
        {this.props.name}
      </button>;
  }
}
export default Button;
