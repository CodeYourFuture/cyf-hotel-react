import React, { Component } from 'react';
import moment from 'moment';


class TableRow extends Component {
Click = () => {
    this.props.rowClick(this.props.item.id)
}

    render() {

        return (
            <tr className={this.props.trCss} key={this.props.index} onClick={this.Click} >
                <td> {this.props.item.title} </td>
                <td> {this.props.item.firstName} </td>
                <td> {this.props.item.surname} </td>
                <td> {this.props.item.email}</td>
                <td> {this.props.item.roomId} </td>
                <td> {this.props.item.checkInDate} </td>
                <td> {this.props.item.checkOutDate} </td>
                <td> {moment(this.props.item.checkOutDate).diff(this.props.item.checkInDate, 'days')} days</td>
            </tr>
        )
    };
};

export default TableRow;
