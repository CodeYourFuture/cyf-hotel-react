import React, { Component } from 'react';

class TableHead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th onClick={()=> {this.props.sortColumn('title')}}>Title</th>
                    <th onClick={()=> {this.props.sortColumn('firstName')}}>FirstName</th>
                    <th onClick={()=> {this.props.sortColumn('surname')}}>Surname</th>
                    <th onClick={()=> {this.props.sortColumn('email')}}>E-Mail</th>
                    <th onClick={()=> {this.props.sortColumn('roomId')}}>RoomID</th>
                    <th onClick={()=> {this.props.sortColumn('checkInDate')}}>Check-In-Date</th>
                    <th onClick={()=> {this.props.sortColumn('checkOutDate')}}>Check-Out-Date</th>
                    <th>Stay in</th>
                </tr>
            </thead>
        )
    };
};

export default TableHead;