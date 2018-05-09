import React, { Component } from 'react';

class BookingsMessage extends Component {
  render() {
    return (
      <div className="row">
        <p>There are booking available for {new Date().toLocaleDateString()}</p>
      </div>
    );
  }
}

export default BookingsMessage;




