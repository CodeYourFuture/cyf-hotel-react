import React from 'react';
import moment from 'moment'

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isRowSelected: false, selectedRow: null };
    }



    highlightRow = (event) => {

        //Check if there is a row selected or not 
        if (!this.state.isRowSelected && !this.state.selectedRow) {

            //updating the state if a new  row selected and saving the value of the it for later to make sure there is only one row selected 
            this.setState({
                isRowSelected: true,
                selectedRow: event.target.parentNode
            })

            // adding  class to  highlight the selected row 
            event.target.parentNode.classList.add("table-danger");

        } else if (this.state.selectedRow === event.target.parentNode) {//here we check if the clicked row is previously selected  if it is it will be unhighlighted

            this.setState({
                isRowSelected: false,
                selectedRow: null
            })
            // removing the added class in case we clicked a previously highlighted row 
            event.target.parentNode.classList.remove("table-danger");

        }

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

                        {this.props.results.map((result, index) => {
                            return (
                                <tr key={result.id}
                                    onClick={this.highlightRow}>
                                    <td >{result.title}</td>
                                    <td>{result.firstName}</td>
                                    <td>{result.surName}</td>
                                    <td>{result.email}</td>
                                    <td>{result.roomId}</td>
                                    <td>{result.checkInDate}</td>
                                    <td>{result.checkOutDate}</td>
                                    <td>{moment(result.checkOutDate).diff(result.checkInDate, 'days')}</td>
                                </tr>)
                        })}

                    </tbody>
                </table>

            </div >)

    }
}

export default SearchResults;