import React,{ Component } from "react";
import moment from "moment";

class Results extends Component  {
    render(){
return ( <div>
    <table className="table search-table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Firstname </th>
                <th>Surname</th>
                <th>Email</th>

                <th>Room ID</th>
                <th>check in date</th>
                <th>check out date</th>
                <th>Total DaysIN</th>
            </tr>
        </thead>

        <tbody>
            {/* {console.log(this.props.results)} */}
            {this.props.results.map((booking,key) => <TableRow key={key} booking={booking} />)}
        </tbody>
    </table>
</div>)
    }
   
};
const TableRow = (props) => {
    return (
        <tr>
            <td>{props.booking.title}</td>
            <td>{props.booking.firstName}</td>
            <td>{props.booking.surname}</td>
            <td>{props.booking.email}</td>

            <td>{props.booking.roomId}</td>
            <td>{props.booking.checkInDate}</td>
            <td>{props.booking.checkOutDate}</td>
            <td>{moment(props.booking.checkOutDate).diff(props.booking.checkInDate, 'days')}</td>
        </tr>
    )
}

export default Results