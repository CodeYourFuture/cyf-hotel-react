import react from "react";
import data from '../data/fakeBookings.json'
import moment from 'moment'

function calculateNumberOfNights(checkInDate, checkOutDate) {
  const a = moment(checkInDate, "YYYY-MM-DD"); 
    const b = moment(checkOutDate, "YYYY-MM-DD"); 
   return b.diff(a, 'days')

}


const SearchResults = () => {
  console.log('data', data)
 
return (
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">number of nights</th>
      </tr>
    </thead>

    <tbody>
      {data.map((d) => {
        return (
          <tr>
            {/* <th scope="row">1</th> */}
            <td>{d.title}</td>
            <td>{d.firstName}</td>
            <td>{d.surname}</td>
            <td>{d.email}</td>
            <td>{d.roomId}</td>
            <td>{d.checkInDate}</td>
            <td>{d.checkOutDate}</td>
            <td>{calculateNumberOfNights(d.checkInDate, d.checkOutDate)}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
}

export default SearchResults