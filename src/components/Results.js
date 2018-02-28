import React, { Component } from 'react';
// import FakeBookings from '../data/fakeBookings.json'

export default class Results extends Component {
    render() {
        // let display;
        // if(this.props.bookingsItems.length === 0){
        //        display = "hidden"
        //    }else{
        //        display = "row";
        //    }
        return (
            <div className='row'>
                <div className="col">
                    <p>Results</p>
                    <table className="table search-table">
                        <thead>
                                <tr>
                                    <th onClick={this.props.sortColumn}>{this.props.resultHeading[0]}</th>
                                    <th onClick={this.props.sortColumn} >{this.props.resultHeading[1]}</th>
                                    <th onClick={this.props.sortColumn}>{this.props.resultHeading[2]}</th>
                                    <th onClick={this.props.sortColumn}>{this.props.resultHeading[3]}</th>
                                    <th onClick={this.props.sortColumn}>{this.props.resultHeading[4]}</th>
                                    <th onClick={this.props.sortColumn}>{this.props.resultHeading[5]}</th>
                                    <th onClick={this.props.sortColumn}>{this.props.resultHeading[6]}</th>
                                    <th onClick={this.props.sortColumn}>{this.props.resultHeading[7]}</th> 
                                </tr>
                        </thead>
                        <tbody>
                            {this.props.bookingsItems.map((item, index) => (
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
                    </table>
                </div>
            </div>
        )
    }
}