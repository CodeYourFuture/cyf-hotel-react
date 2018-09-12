import React from 'react'
import moment from 'moment'
const Result = (props) => {
    return (
        <table>
            <tr>
                <th>Title</th>
                <th>First Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Room Id</th>
                <th>Check in date</th>
                <th>Check out date</th>
                <th>Duration</th>
            </tr>
            {props.booking.map(item => (
                <tr>
                    <td>{item.title}</td>
                    <td>{item.firstName}</td>
                    <td>{item.surname}</td>
                    <td>{item.email}</td>
                    <td>{item.roomId}</td>
                    <td>{item.checkInDate}</td>
                    <td>{item.checkOutDate}</td>
                    <td>{moment(item.checkOutDate).diff((item.checkInDate), 'days')}</td>
                </tr>
            ))}
        </table>
    )
}


export default Result;