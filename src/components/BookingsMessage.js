import React, { Component } from 'react';

class BookingsMessage extends Component {
  render() {
    return (
        <p>There are booking available for {new Date().toLocaleDateString()}</p>
    );
  }
}

export default BookingsMessage;




