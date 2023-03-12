import moment from "moment";

const Table = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out</th>
          <th scope="col">Booked</th>
          <th scope="col">Show Profile</th>
        </tr>
      </thead>

      <tbody>
        {props.results.map((customer) => {
          const calculate = () => {
            const dateA = moment(customer.checkInDate, "YYYY-MM-DD");
            const dateB = moment(customer.checkOutDate, "YYYY-MM-DD");
            return `${dateB.diff(dateA, "days")} Nights`;
          };
          return (
            <tr key={customer.id}>
              <th scope="row">{customer.id}</th>
              {/* <th scope="row">1</th> */}
              <td>{customer.title}</td>
              <td>{customer.firstName}</td>
              <td>{customer.surname}</td>
              <td>{customer.email}</td>
              <td>{customer.roomId}</td>
              <td>{customer.checkInDate}</td>
              <td>{customer.checkOutDate}</td>
              <td>{calculate()}</td>
              <td>
                <button onClick={() => props.showProfile(customer.id)}>
                  Show Profile
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
