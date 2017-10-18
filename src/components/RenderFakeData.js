import React from 'react'
import TableRows from './TableRows'
// import * as FakeBookings from "../data/fakeBookings.json";

const RenderFakeData = (props) => {

return  props.results.map(function (jsonData , i){
    return (
      <TableRows key={jsonData.id} counter={props.counter} {...jsonData} />
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