import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import CreateRowTable from "./CreateRowTable";
function SearchResults({ results, showProfile }) {
  const [datails, setDetails] = useState("");
  const fetchData = async id => {
    const res = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
    const data = await res.json();
    setDetails(data);
  };
  function showProfile(id) {
    fetchData(id);
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">e-mail</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights of stay</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {results &&
            results.map((customer, index) => (
              <CreateRowTable
                key={index}
                customer={customer}
                showProfile={showProfile}
              />
            ))}
        </tbody>
        <CustomerProfile customerProfile={datails} />
      </table>
    </div>
  );
}

export default SearchResults;
