import React, { Component } from "react";
import diff from "../helper/diff";
export default class Results extends Component {




    render() {
        return (
            <table className="table search-table">
                <thead>
                    <tr>
                        <th onClick={()=>{this.props.sortBy("title")}}>Title</th>
                        <th onClick={()=>{this.props.sortBy("firstName")}}>First Name</th>
                        <th onClick={()=>{this.props.sortBy("surname")}}>Surname</th>
                        <th onClick={()=>{this.props.sortBy("email")}}>Email</th>
                        <th onClick={()=>{this.props.sortBy("roomId")}}>Room id</th>
                        <th onClick={()=>{this.props.sortBy("checkInDate")}}>Check in date</th>
                        <th onClick={()=>{this.props.sortBy("checkOutDate")}}>Check out date</th>
                        <th onClick={()=>{this.props.sortBy("diff(x.checkInDate, x.checkOutDate")}}>Number of days</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.results.map((x, index) =>
                        <tr key={index}>
                            <td>{x.title}</td>
                            <td>{x.firstName}</td>
                            <td>{x.surname}</td>
                            <td>{x.email}</td>
                            <td>{x.roomId}</td>
                            <td>{x.checkInDate}</td>
                            <td>{x.checkOutDate}</td>
                            <td>{diff(x.checkInDate, x.checkOutDate)}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        )
    }
};



