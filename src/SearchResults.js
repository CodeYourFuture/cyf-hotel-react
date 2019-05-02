import React from 'react';
import TableRow from './TableRow'
class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isRowSelected: false, selectedRow: null };
    }

    render() {

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr >
                            <th scope="col">Title</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Room Id</th>
                            <th scope="col">Check in date</th>
                            <th scope="col">Check out date</th>
                            <th scope="col">Total of stayed days</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.results.map((result, index) => <TableRow result={result} />
                        )}

                    </tbody>
                </table>

            </div >)

    }
}

export default SearchResults;