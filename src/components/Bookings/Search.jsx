import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form className="form-group d-flex justify-content-center py-3">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Search Customers"
        value={searchInput}
        onChange={handleSearchInput}
      />
    </form>
  );
};

export default Search;
