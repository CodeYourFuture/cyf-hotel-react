import SingleBooking from "./SingleBooking"
import data from "./data/fakeBookings.json"

function SearchResults() {
  return <>
  
<table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">ٔNights</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <SingleBooking
              key={item.id}
              id={item.id}
              title={item.title}
              firstName={item.firstName}
              surname={item.surname}
              email={item.email}
              roomId={item.roomId}
              checkInDate={item.checkInDate}
              checkOutDate={item.checkOutDate}
              Nights={item.nights}
            />
          ))}
        </tbody>
      </table>
  </>
}

export default SearchResults

