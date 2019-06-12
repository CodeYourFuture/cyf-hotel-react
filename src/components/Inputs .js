import React from "react";

class Inputs extends React.component {
  constructor(props) {
    super(props);
    this.State = {};
  }
  render() {
    return (
      <div className='App_input_lest' type='text'>
        <input placeholder='title' type='text' />
        <input placeholder='FirstName' type='text' />
        <input placeholder='surname' type='text' />
        <input placeholder='RoomID' type='text' />
        <input placeholder='checkInDate' type='text' />
        <input placeholder='CheckOutDate' type='text'>
          {" "}
        </input>
      </div>
    );
  }
}

export default Inputs;
