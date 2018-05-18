import React from "react";
    


<tr>

<th>"id"</th>
           <th>"title"</th>
           <th>"FirstName"</th>
           <th>"SurName"</th>
           <th>"Email"</th>
           <th>"RoomId"</th>
           <th>Check In Date</th>
           <th>"Check Out Date"</th>
           <th>"numberOfDays"</th>
         </tr>
         {this.props.results.map(result => {
           let checkInDateArray = result.checkInDate.split("-");
           let checkInMoment = moment(checkInDateArray);
           let checkOutDateArray = result.checkOutDate.split("-");
           let checkOutMoment = moment(checkOutDateArray);
           let numberOfDays = checkOutMoment.diff(checkInMoment, "days");
           // console.log(checkOutDateArray);
           // console.log(checkOutMoment);
           export default CheckList;