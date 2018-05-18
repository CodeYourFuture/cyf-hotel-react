import React from "react";
import BookingCounter from "./BookingCounter.js";

class addNumbers extends React.Component {
  render() {
    return (
      <div>
        <h1>sum of the numbers would be</h1>
        <p> a+b would be 30; </p>
        <p>
          {this.props.name} likes {this.props.hobbies}
        </p>
        <BookingCounter buttonName={this.props.counterName} />
      </div>
    );
  }
}

export default addNumbers;
