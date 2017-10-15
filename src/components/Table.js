
import React from "react";
import TableRow from "./TableRow";

// console.log(fakeBookings);
const renderBookings = function(data) {
    return data.map((booking)=> <TableRow { ...booking} />
   )
}

const Results = function(props){
    return  <table className="table search-table" >
    <tr>
      <th >title</th>
      <th >first name</th>
      <th >surname</th>
      <th >email</th>
      <th >room id</th>
      <th >check in</th>
      <th >check out</th>
      <th >Number of days</th>

   </tr>
    {renderBookings(props.data)}
        
</table>
}
export default Results;