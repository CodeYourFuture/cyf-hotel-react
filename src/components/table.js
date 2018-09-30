import React from "react";
//import moment from 'moment'
// const dateDifference = (start, end) => {
//     const startMoment = moment(start)
//     const endMoment = moment(end)
//     return endMoment.diff(startMoment, "days");
// }

// const TableHeader = () => (
//   <thead>
//     <tr>
//       <th>ID</th>
//       <th>Title</th>
//       <th>First name</th>
//       <th>Surname</th>
//       <th>Email</th>
//       <th>Roome ID</th>
//       <th>Check in date</th>
//       <th>Check out date</th>
//       <th>Check out date</th>
//     </tr>
//   </thead>
// );
class TableRow extends React.Component{
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      isActive: false,
      rowData: props.rowData
    }

  }
    toggleClass = () => {

      this.setState(({ isActive }) => ({ isActive: !isActive }))
  
    }
  
  
  render() {
    return(
  <tbody>
    <tr onClick={this.toggleClass} className={this.state.isActive ? "activeRow" : null}>
      <td>{this.state.rowData.id}</td>
      <td>{this.state.rowData.title}</td>
       <td>{this.state.rowData.first_name}</td>
      <td>{this.state.rowData.surname}</td>
      {/* <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td> */} 
      
      {/* <td>{dateDifference(checkInDate, checkOutDate)}</td> */}
    </tr>
  </tbody>
)
  };
}
export { TableRow };