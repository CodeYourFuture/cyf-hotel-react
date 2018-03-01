import React, { Component } from "react";
export default class Results extends Component {
    render() {
        return (
            <table className="table search-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Room id</th>
                        <th>Check in date</th>
                        <th>Check out date</th>
                    </tr>
                </thead>
                <tbody>
                    
                {this.props.results.map(x => 
                    <tr>
                        <td>{x.title}</td>
                        <td>{x.firstName}</td>
                        <td>{x.surname}</td>
                        <td>{x.email}</td>
                        <td>{x.roomId}</td>
                        <td>{x.checkInDate}</td>
                        <td>{x.checkOutDate}</td>
                    </tr>
                )}
                </tbody>
            </table>

        )
    }
};
