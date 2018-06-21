import React, { Component } from 'react';
import moment from 'moment';


class TableRow extends Component {
    render() {
        return (
            <tr className={this.props.trCss} key={this.props.index} onClick={() => { this.props.rowClick(this.props.item.id) }} >
                <td> {this.props.item.title} </td>
                <td> {this.props.item.firstname} </td>
                <td> {this.props.item.surname} </td>
                <td> {this.props.item.email}</td>
                <td> {this.props.item.rooms_id} </td>
                <td> {this.props.item.checkin_date} </td>
                <td> {this.props.item.checkout_date} </td>
                <td> {moment(this.props.item.checkout_date).diff(this.props.item.checkin_date, 'days')} days</td>
            </tr>
        )
    };
};

export default TableRow;
