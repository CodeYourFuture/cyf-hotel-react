import React from "react";

const ResultHead = ({ sortBy }) => {
    return (
        <thead>
            <tr>
                <th onClick={() => sortBy('title')}>Title</th>
                <th onClick={() => sortBy('firstName')}>First Name</th>
                <th onClick={() => sortBy('surname')}>Sur Name</th>
                <th onClick={() => sortBy('email')}>Email</th>
                <th onClick={() => sortBy('roomId')}>Room Id</th>
                <th onClick={() => sortBy('checkInDate')}>Check in Date</th>
                <th onClick={() => sortBy('checkOutDate')}>Check Out Date</th>
                <th onClick={() => sortBy('Days')}>Days</th>
            </tr>
        </thead>
    )
};
export default ResultHead;