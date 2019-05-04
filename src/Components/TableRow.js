import React from 'react';
import moment from 'moment'


class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false };
    }
    highlightRow = (event) => {
        this.setState((prevState) => {
            return { selected: !prevState.selected }
        })


    }


    render() {
        const className = this.state.selected ? "table-danger" : "";
        return (
            <tr key={this.props.result.id}
                onClick={this.highlightRow} className={className}>
                <td >{this.props.result.title}</td>
                <td>{this.props.result.firstName}</td>
                <td>{this.props.result.surname}</td>
                <td>{this.props.result.email}</td>
                <td>{this.props.result.roomId}</td>
                <td>{this.props.result.checkInDate}</td>
                <td>{this.props.result.checkOutDate}</td>
                <td>{moment(this.props.result.checkOutDate).diff(this.props.result.checkInDate, 'days')}</td>
            </tr>
        );
    }
}

export default TableRow;