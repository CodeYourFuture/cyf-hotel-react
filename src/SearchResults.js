import moment from 'moment';
import SearchRow from './SearchRow';

function SearchResults(props) {
  
  let tr = props.results.map((element) => (
    <SearchRow
       key = {element.id}
       id = {element.id}
       title = {element.title}
       firstName = {element.firstName}
       surname = {element.surname}
       email = {element.email}
       roomId = {element.roomId}
       checkInDate = {element.checkInDate}
       checkOutDate = {element.checkOutDate}
       diff = {moment(element.checkOutDate).diff(moment(element.checkInDate), 'days')}
    />
  ));

  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Ckeck in</th>
          <th scope="col">Ckeck out</th>
          <th scope="col">Nigths</th>
        </tr>
      </thead>
      <tbody>{tr}</tbody>
    </table>
  );
}

export default SearchResults;
