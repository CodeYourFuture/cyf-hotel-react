import React, { Component } from "react";
import moment from 'moment';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRowSelected: false
        }
    }

    handleClick = (event) => {
        const clickedRow = event.target.parentElement;
        const previousState = this.state.isRowSelected; clickedRow.className = previousState ? '' : 'selected';
        this.setState({ isRowSelected: !previousState });
    }

    render() {
        let result = this.props.result;
        return (
            <tr key={result.id} onClick={this.handleClick}>
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{moment(result.checkOutDate).diff(result.checkInDate, 'days')}</td>
            </tr>
        )
    }
}

export default TableRow;