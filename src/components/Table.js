
import React from "react";
import TableRow from "./TableRow";

// console.log(fakeBookings);
const renderBookings = function(data) {
    return data.map((booking)=> <TableRow { ...booking} />
   )
}

class Results extends React.Component {
    constructor(props){
    super(props)
    this.state ={order : null, data:props.data}
    console.log(props.data);
    }
    handleOrder = ()=>{
        let sorted = this.state.data.sort(function(a, b) {
            var firstNameA = a.firstName.toUpperCase(); // ignore upper and lowercase
            var firstNameB = b.firstName.toUpperCase(); // ignore upper and lowercase
            if (firstNameA < firstNameB) {
              return 1;
            }
            if (firstNameA > firstNameB) {
              return -1;
            }
            return 0;
          });
     this.setState({data: sorted});   
    }
    render() {
    return  <table className="table search-table" >
    <tr>
      <th > checkBox</th>
      <th onClick={this.handleOrder}>title</th>
      <th >firstname</th>
      <th >surname</th>
      <th >email</th>
      <th >room id</th>
      <th >check in</th>
      <th >check out</th>
      <th >Number of days</th>

   </tr>
    {renderBookings(this.state.data)}
        
</table>
}
}
export default Results;