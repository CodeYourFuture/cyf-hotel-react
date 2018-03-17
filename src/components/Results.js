import React, { Component } from "react";


export default class Results extends Component {
    componentWillReceiveProps() {
        console.log("receiving props");
    }
    render() {
        return (
            <table className="table search-table">
                <thead>
                    <tr>
                        <th onClick={() => { this.props.sortBy("title", "string") }}>Title</th>
                        <th onClick={() => { this.props.sortBy("firstName", "string") }}>First Name</th>
                        <th onClick={() => { this.props.sortBy("surname", "string") }}>Surname</th>
                        <th onClick={() => { this.props.sortBy("email", "string") }}>Email</th>
                        <th onClick={() => { this.props.sortBy("roomId", "number") }}>Room id</th>
                        <th onClick={() => { this.props.sortBy("checkInDate", "date") }}>Check in date</th>
                        <th onClick={() => { this.props.sortBy("checkOutDate", "date") }}>Check out date</th>
                        <th onClick={() => { this.props.sortBy("numberOfDays", "number") }}>Number of days</th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.results.map((x, index) =>
                        <tr onClick={(x) => { this.props.toggleSelected(x) }} style={this.props.style} key={index}>
                            <td>{x.title}</td>
                            <td>{x.firstName}</td>
                            <td>{x.surname}</td>
                            <td>{x.email}</td>
                            <td>{x.roomId}</td>
                            <td>{x.checkInDate}</td>
                            <td>{x.checkOutDate}</td>
                            <td>{x.numberOfDays}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        )
    }
};



