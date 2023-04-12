import { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    console.log(!event.target.value ? 1 : 2);
    setSearchInput(event.target.value);
    console.log(searchInput);
  };
  const onSubmitHandler = event => {
    event.preventDefault();
    props.search(searchInput);
    console.log(event.target);
    console.log(searchInput);
    console.log(props);
    setSearchInput("");
  };
  return (
    <div className="">
      <div className="">
        <h4 className="">Search Bookings</h4>
        <p>type "ALL" in search for all customers</p>
      </div>
      <div className=" search-wrapper">
        <div className="">
          <form className="search-box" onSubmit={onSubmitHandler}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className=""
                placeholder="Customers first/second name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
