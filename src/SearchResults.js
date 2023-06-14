import fakeData from "./data/fakeBookings.json";
import moment from "moment";

export function SearchResults() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">firstName</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((element) => (
            <tr key={element.id}>
              <th scope="row">{element.id}</th>
              <td>{element.title}</td>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>

              <td>
                {moment(element.checkOutDate).diff(
                  moment(element.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// {
//   "id": 1,
//   "title": "Mr",
//   "firstName": "John",
//   "surname": "Doe",
//   "email": "johndoe@doe.com",
//   "roomId": 2,
//   "checkInDate": "2017-11-21",
//   "checkOutDate": "2017-11-23"
// },
