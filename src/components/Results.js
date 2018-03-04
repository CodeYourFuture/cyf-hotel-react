import React from "react";

const Results = (props) => (
    <div class="container">
        <div class="row">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>First tname</th>
                            <th>Sur Name</th>
                            <th>Email</th>
                            <th>Room Id</th>
                            <th>Check in Date</th>
                            <th>Check Out Date</th>
                            <th>Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.FakeBookings.filter(props.searchingFor(props.term)).map(data =>
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
        </div>
    </div>
);
export default Results;