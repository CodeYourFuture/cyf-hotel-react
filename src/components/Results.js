import React from "react";
// import * as FakeBookings from "../data/fakeBookings.json";
const Results = () => (
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.FakeBookings.map((data) => {
                            return <tr>
                                <td>{data.title}</td>
                                <td>{data.firstName}</td>
                                <td>{data.surname}</td>
                                <td>{data.email}</td>
                                <td>{data.roomId}</td>
                                <td>{data.checkInDate}</td>
                                <td>{data.checkOutDate}</td>
                            </tr>
                        })};
                </tbody>
                </table>
            </div>
        </div>
    </div>
);
export default Results;