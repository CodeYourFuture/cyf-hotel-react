import React, { Component } from "react";
import moment from "moment";


class CustomerDataTable extends Component {

constructor(props) {
  super(props);
  this.state = {
    selected: false
  }
}


toggleHighlightedRow = (e) => {
  this.setState(prevState => ({
    selected: !prevState.selected
  })
)
this.state.selected ? (e.target.parentNode.className = 'bg-info') : (e.target.parentNode.className = '');
}


calculateStayDuration = (checkIn, checkOut) => {
  return moment(checkOut).diff(moment(checkIn), "days");
}




  render() {
    return (
      <tbody>

        {this.props.results.map(res => {
          return (

         <tr onClick={this.toggleHighlightedRow} key={res.id} id={res.id}>
              <th scope="row" key={res.id}>
                {res.id}
              </th>
              <td>{res.title}</td>
              <td>{res.firstName}</td>
              <td>{res.surname}</td>
              <td>{res.email}</td>
              <td>{res.roomId}</td>
              <td>{res.checkInDate}</td>
              <td>{res.checkOutDate}</td>
              <td>
                {this.calculateStayDuration(res.checkInDate, res.checkOutDate)}
              </td>
            </tr>
          );
        })}
      </tbody>
    );

}

}

export default CustomerDataTable;
