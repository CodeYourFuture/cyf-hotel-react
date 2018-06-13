import React, { Component } from 'react';

class TableData extends Component {
    render() {
        const rows = this.props.datas;
        let rowData = rows.map(function (item, i) {
            return (
                <tr key={i}>
                    <td> {item.title} </td>
                    <td> {item.firstName} </td>
                    <td> {item.surname} </td>
                    <td> {item.email}</td>
                    <td> {item.roomId} </td>
                    <td> {item.checkInDate} </td>
                    <td> {item.checkOutDate} </td>
                </tr>
            )
        })
        return (
            <tbody>
                {rowData}
            </tbody>
        )
    };
};

export default TableData;