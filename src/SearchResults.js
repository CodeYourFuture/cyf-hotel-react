import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

const SearchResults = props => (
  <table className="table table-striped">
    <CreateTableHeader />
    <CreateEachRow results={FakeBookings} />
  </table>
);

const CreateTableHeader = () => (
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
      <th scope="col">Room ID</th>
      <th scope="col">Check In Date</th>
      <th scope="col">Check Out Date</th>
      <th scope="col">Number Of Nights</th>
    </tr>
  </thead>
);

const CreateEachRow = props => (
  <tbody>
    {props.results.map((eachPerson, index) => (
      <tr key={index}>
        <td scope="row">{eachPerson.id}</td>
        <td>{eachPerson.title}</td>
        <td>{eachPerson.firstName}</td>
        <td>{eachPerson.surname}</td>
        <td>{eachPerson.email}</td>
        <td>{eachPerson.roomId}</td>
        <td>{eachPerson.checkInDate}</td>
        <td>{eachPerson.checkOutDate}</td>
        <td>
          {moment(eachPerson.checkOutDate).diff(
            moment(eachPerson.checkInDate),
            "days"
          )
          // moment(eachPerson.checkOutDate.split("-")).diff(moment(eachPerson.checkInDate.split("-"))np, 'days')
          }
        </td>
      </tr>
    ))}
  </tbody>
);

export default SearchResults;
