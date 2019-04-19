import React, { Component } from "react";
import moment from 'moment';

const tableHeaderContents = ['ID', 'Title', 'First Name', 'Surname', 'E-mail', 'Room ID', 'Check-in Date', 'Check-out Date', 'Night Stay'];

const SearcResultsTableHeader = tableHeaderContents.map(content => {
    return <th scope="col">{content}</th>
});

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRowSelected: this.props.results.map(result => {
                return { [result.id]: false };
            })
        }
    }

    handleClick = (event) => {
        const clickedRow = event.target.parentElement;
        const clickedRowIndex = clickedRow.rowIndex;
        const previousState = this.state.isRowSelected[clickedRowIndex - 1][clickedRowIndex];
        clickedRow.className = previousState ? '' : 'selected';
        var stateCopy = Object.assign({}, this.state);
        stateCopy.isRowSelected[clickedRowIndex - 1][clickedRowIndex] = !previousState;
        this.setState(stateCopy);
    }

    render() {
        let results = this.props.results;
        return (
            <div class="table-responsive">
                <table className='table'>
                    <thead className="thead-dark">
                        <tr>
                            {SearcResultsTableHeader}
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(result => {
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
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SearchResults;