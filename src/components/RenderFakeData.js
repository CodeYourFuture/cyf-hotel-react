import React from 'react'
import moment from 'moment'
// import * as FakeBookings from "../data/fakeBookings.json";

const RenderFakeData = (props) => {

return  props.results.map(function (jsonData , i){
    return (
      <tr key={i}>
        <td>{jsonData.id}</td>
        <td>{jsonData.title}</td>
        <td>{jsonData.firstName}</td>
        <td>{jsonData.surname}</td>
        <td>{jsonData.email}</td>
        <td>{jsonData.roomId}</td>
        <td>{jsonData.checkInDate}</td>
        <td>{jsonData.checkOutDate}</td>
        <td>{moment(jsonData.checkOutDate).diff(jsonData.checkInDate, 'days')}</td>
      </tr> 

    )
  });

}

  // const TableRow = function(props) {
    // return(
    //   <tr>
    //   <td >{props.title}</td>
    //   <td >{props.firstName}</td>
    //   <td >{props.surname}</td>
    //   <td >{props.email}</td>
    //   <td >{props.roomId}</td>
    //   <td >{props.checkInDate}</td>
    //   <td >{props.checkOutDate}</td>
    //   </tr>
    //  );



// }

export default RenderFakeData;