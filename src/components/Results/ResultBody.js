import React from 'react';

const resultBody = (props) => {
    return (
        <tbody>
            {props.bookingsItems.map((item, index) => (
                <tr key={index}>
                    <td >{item.title}</td>
                    <td >{item.firstName}</td>
                    <td >{item.surname}</td>
                    <td >{item.email}</td>
                    <td >{item.roomId}</td>
                    <td >{item.checkInDate}</td>
                    <td >{item.checkOutDate}</td>
                    <td >{parseInt((new Date(item.checkOutDate) - new Date(item.checkInDate)) / (1000 * 60 * 60 * 24), 10)} days</td>
                </tr>
            ))}
        </tbody>
    )
}

export default resultBody;