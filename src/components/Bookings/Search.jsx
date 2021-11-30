import { useState } from "react";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    search(searchInput);
  };

  return (
    <form className="form-group d-flex justify-content-center py-3" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        className="form-control w-50"
        placeholder="Search Customers"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <button className="btn btn-primary ms-3">Search</button>
    </form>
  );
};

export default Search;
