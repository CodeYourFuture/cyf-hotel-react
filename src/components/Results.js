import React from "react";

const Results = ({ filteredResult, sortBy }) => {
    return (
        <div>
            <h3>Result: {filteredResult.length}</h3>
            <table class="table">
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
                <tbody>
                    {filteredResult.map(data =>
                        <tr>
                            <td>{data.title}</td>
                            <td>{data.firstName}</td>
                            <td>{data.surname}</td>
                            <td>{data.email}</td>
                            <td>{data.roomId}</td>
                            <td>{data.checkInDate}</td>
                            <td>{data.checkOutDate}</td>
                            <td>{parseInt((new Date(data.checkOutDate) - new Date(data.checkInDate)) / (86400000), 10)} days</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
};
export default Results;