import moment from "moment";
import SearchRow from "./SearchRow";
import CustomerProfile from "./CustomerProfile";
import React, {useState, useEffect} from "react";

function SearchResults(props) {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetch(
      `https://cyf-react.glitch.me/customers/1`
    )
      .then((res) => res.json())
      .then((data) => {setProfile(data);});
  }, []);

  const tr = props.results.map((element) => (
    <>
      <SearchRow key={element.id} guest={element} />
    </>
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
      {profile && <CustomerProfile profile = {profile}/>}
    </>
  );
}

export default SearchResults;
