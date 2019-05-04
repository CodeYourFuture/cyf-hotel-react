import React from 'react';
import TableRow from './TableRow'
import NewBookingForm from './NewBookinForm'
import TableColumn from './TableColumn';
class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: null };
    }
    componentDidMount() {
        this.setState(previousState => {
            return { results: this.props.results }
        })
    }
    componentWillReceiveProps(nextProps) {
        //Perform some operation
        this.setState({ results: nextProps.results });
    }

    sortAndUpdate = (nameOFCoulumn, clicked) => {
        console.log(nameOFCoulumn)
        const ascendingSort = (a, b) => {
            console.log(a.firstName)
            if (nameOFCoulumn === "First Name") {
                if (a.firstName < b.firstName) { return -1; }
                if (a.firstName > b.firstName) { return 1; }
                return 0;
            } else if (nameOFCoulumn === "Title") {
                if (a.title < b.title) { return -1; }
                if (a.title > b.title) { return 1; }
                return 0;
            } else if (nameOFCoulumn === "Surname") {
                if (a.surname < b.surname) { return -1; }
                if (a.surname > b.surname) { return 1; }
                return 0;
            } else if (nameOFCoulumn === "Email") {
                if (a.email.toUpperCase() < b.email.toUpperCase()) { return -1; }
                if (a.email.toUpperCase() > b.email.toUpperCase()) { return 1; }
                return 0;
            } else if (nameOFCoulumn === "Check in date") {
                const dateA = new Date(a.checkInDate), dateB = new Date(b.checkInDate);
                return dateB - dateA;
            } else if (nameOFCoulumn === "Check out date") {
                const dateA = new Date(a.checkOutDate), dateB = new Date(b.checkOutDate);
                return dateB - dateA;
            } else if (nameOFCoulumn === "Room Id") {
                if (a.roomId < b.roomId) { return -1; }
                if (a.roomId > b.roomId) { return 1; }
                return 0;
            } else if (nameOFCoulumn === "Number of days") {
                const diffA = new Date(a.checkOutDate) - new Date(a.checkInDate)
                const diffB = new Date(b.checkOutDate) - new Date(b.checkInDate)
                if (diffA < diffB) { return -1; }
                if (diffA > diffB) { return 1; }
                return 0;

            }
        };

        const descendingSort = (a, b) => {
            console.log(a.firstName)
            if (nameOFCoulumn === "First Name") {
                if (a.firstName < b.firstName) { return 1; }
                if (a.firstName > b.firstName) { return -1; }
                return 0;
            } else if (nameOFCoulumn === "Title") {
                if (a.title < b.title) { return 1; }
                if (a.title > b.title) { return -1; }
                return 0;
            } else if (nameOFCoulumn === "Surname") {
                if (a.surname.toUpperCase() < b.surname.toUpperCase()) { return 1; }
                if (a.surname.toUpperCase() > b.surname.toUpperCase()) { return -1; }
                return 0;
            } else if (nameOFCoulumn === "Email") {
                if (a.email < b.email) { return 1; }
                if (a.email > b.email) { return -1; }
                return 0;
            } else if (nameOFCoulumn === "Check in date") {
                const dateA = new Date(a.checkInDate), dateB = new Date(b.checkInDate);
                return dateA - dateB;
            } else if (nameOFCoulumn === "Check out date") {
                const dateA = new Date(a.checkOutDate), dateB = new Date(b.checkOutDate);
                return dateA - dateB;
            } else if (nameOFCoulumn === "Room Id") {
                if (a.roomId < b.roomId) { return 1; }
                if (a.roomId > b.roomId) { return -1; }
                return 0;
            } else if (nameOFCoulumn === "Number of days") {
                const diffA = new Date(a.checkOutDate) - new Date(a.checkInDate)
                const diffB = new Date(b.checkOutDate) - new Date(b.checkInDate)
                if (diffA < diffB) { return 1; }
                if (diffA > diffB) { return -1; }
                return 0;
            }
        };



        if (!clicked) {
            this.setState(previousState => {
                return { results: previousState.results.sort(ascendingSort) }
            })
        } else {
            this.setState(previousState => {
                return { results: previousState.results.sort(descendingSort) }
            })
        }

    }
    render() {

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr >
                            <TableColumn title="Title" sortAndUpdate={this.sortAndUpdate} />
                            <TableColumn title="First Name" sortAndUpdate={this.sortAndUpdate} />
                            <TableColumn title="Surname" sortAndUpdate={this.sortAndUpdate} />
                            <TableColumn title="Email" sortAndUpdate={this.sortAndUpdate} />
                            <TableColumn title="Room Id" sortAndUpdate={this.sortAndUpdate} />
                            <TableColumn title="Check in date" sortAndUpdate={this.sortAndUpdate} />
                            <TableColumn title="Check out date" sortAndUpdate={this.sortAndUpdate} />
                            <TableColumn title="Number of days" sortAndUpdate={this.sortAndUpdate} />
                        </tr>
                    </thead>
                    {this.state.results && <tbody>

                        {this.state.results.map((result) => <TableRow key={result.id} result={result} />
                        )}

                    </tbody>}
                </table>

                <NewBookingForm addBooking={this.props.addBooking} />
            </div >)


    }
}

export default SearchResults;