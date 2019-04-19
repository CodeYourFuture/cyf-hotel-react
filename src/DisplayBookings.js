import React from 'react';
import moment from 'moment';

const StayDuration = (dateIn, dateOut) => {
    return moment(dateOut).diff(moment(dateIn), "days");
}

const DisplayBookings = (props) => {
    return (
        <tbody>
            {props.bookingsDetails.map((details, index) => {
                return (
                    <tr key={index}>
                        <th scope="col">{details.id}</th>
                        <td >{details.title}</td>
                        <td>{details.firstName}</td>
                        <td >{details.surname}</td>
                        <td>{details.email}</td>
                        <td>{`00${details.roomId}`}</td>
                        <td>{details.checkInDate}</td>
                        <td>{details.checkOutDate}</td>
                        <td>{StayDuration(details.checkInDate, details.checkOutDate)}</td>
                    </tr>
                );
            })}

        </tbody>
    );
}


export { DisplayBookings };