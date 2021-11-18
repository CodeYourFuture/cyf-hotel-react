import React, { useState } from "react";
import Table from "./Table";
import AddCustomer from "./AddCustomer";
import CustomerProfile from "./CustomerProfile";

function setUrl(url) {
  window.history.pushState({}, "", url);
}

const SearchResults = props => {
  const maybeId = +window.location.pathname.split("/")[2];
  let defaultId = null;
  if (!isNaN(maybeId)) {
    defaultId = maybeId;
  }
  console.log(maybeId);
  const [id, setId] = useState(defaultId);
  function getProfileId(id) {
    setId(id);
    setUrl(`/bookings/${id}`);
  }

  return (
    <div>
      <table className="table">
        <Table />
        <AddCustomer getProfileId={getProfileId} result={props.results} />
      </table>
      <CustomerProfile id={id} />
    </div>
  );
};

export default SearchResults;
