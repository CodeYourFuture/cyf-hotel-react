import moment from "moment";
import SearchRow from "./SearchRow";

function SearchResults(props) {
  const tr = props.results.map((element) => (
    <SearchRow key={element.id} guest={element} />
  ));

  return (
    <>
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
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>{tr}</tbody>
      </table>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Customer Profile</h5>
          <p class="card-text"> Customer ID: </p>
          <p class="card-text"> Customer Email: </p>
          <p class="card-text"> Customer Status: </p>
          <p class="card-text"> Customer Phone: </p>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
