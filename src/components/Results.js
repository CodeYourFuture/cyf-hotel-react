import React, { Component } from 'react';


export default class Results extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <p>Results</p>
                    <table className="table search-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>First name id</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Room id</th>
                                <th>Check in date</th>
                                <th>Check out date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item, index) =>  (
                                <tr key = {index}>
                                    <td >{item.title}</td>
                                    <td >{item.firstName}</td>
                                    <td >{item.surname}</td>
                                    <td >{item.email}</td>
                                    <td >{item.roomId}</td>
                                    <td >{item.checkInDate}</td>
                                    <td >{item.checkOutDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}