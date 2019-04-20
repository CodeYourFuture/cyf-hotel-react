import React, { Component } from "react";
import TableRow from './TableRow'

const tableHeaderContents = ['ID', 'Title', 'First Name', 'Surname', 'E-mail', 'Room ID', 'Check-in Date', 'Check-out Date', 'Night Stay'];

const SearcResultsTableHeader = tableHeaderContents.map(content => {
    return <th scope="col">{content}</th>
});

class SearchResults extends Component {
    render() {
        return (
            <div class="table-responsive">
                <table className='table'>
                    <thead className="thead-dark">
                        <tr>
                            {SearcResultsTableHeader}
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.results.map(result => {
                            return <TableRow result={result} />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SearchResults;