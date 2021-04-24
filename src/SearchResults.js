import moment from "moment";

const SearchResults = props => (
    <table className="table table-striped">
        <thead>
            <tr className="bg-dark text-white">
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">First Name</th>
                <th scope="col">Surname</th>
                <th scope="col">email</th>
                <th scope="col">Room ID</th>
                <th scope="col">Check In Date</th>
                <th scope="col">Check Out Date</th>
                <th scope='col'>Number of nights stay</th>
            </tr>
        </thead>
        <tbody>
            {props.results.map(guest => (
                <tr>
                    <td>{guest.id}</td>
                    <td>{guest.title}</td>
                    <td>{guest.firstName}</td>
                    <td>{guest.Surname}</td>
                    <td>{guest.email}</td>
                    <td>{guest.roomId}</td>
                    <td>{guest.checkInDate}</td>
                    <td>{guest.checkOutDate}</td>
                    <td>{moment(guest.checkOutDate).diff(moment(guest.checkInDate))}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default SearchResults;