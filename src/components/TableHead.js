import React, { Component } from 'react';

class TableHead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Title</th>
                    <th>FirstName</th>
                    <th>Surname</th>
                    <th>E-Mail</th>
                    <th>RoomID</th>
                    <th>Check-In-Date</th>
                    <th>Check-Out-Date</th>
                </tr>
            </thead>
        )
    };
};

export default TableHead;