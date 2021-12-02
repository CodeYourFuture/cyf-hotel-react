import { useEffect, useState } from "react";

const Search = ({ search, isDisable }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    search(searchInput);
  }, [searchInput]);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control w-50 m-auto"
      placeholder="Live Search Customers"
      value={searchInput}
      onChange={handleSearchInput}
      disabled={isDisable}
    />
  );
};

export default Search;
