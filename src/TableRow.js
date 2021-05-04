import React, { useState } from "react";
import moment from "moment";

function TableRow(props) {
    const [isHighlighted, setIsHightlighted] = useState(false)
    function customerId() {
        props.setUserId(props.bookingData.id)
        // console.log(props.bookingData.id)


    }

    function handleClick() {
        setIsHightlighted(!isHighlighted)
    }
    return (
        <tr onClick={handleClick}
            style={{ backgroundColor: isHighlighted ? "yellow" : "" }}  >
            <th >{props.bookingData.id}</th>
            <td >{props.bookingData.title}</td>
            <td >{props.bookingData.firstName}</td>
            <td >{props.bookingData.surname}</td>
            <td >{props.bookingData.email}</td>
            <td >{props.bookingData.roomId}</td>
            <td >{props.bookingData.checkInDate}</td>
            <td >{props.bookingData.checkOutDate}</td>
            <td >{moment(props.bookingData.checkOutDate).diff(props.bookingData.checkInDate, "days")}</td>
            <td><button onClick={customerId} className="tableButton">{props.newCustomer} show profile</button></td>

        </tr>
    )
}
export default TableRow;