import React from "react";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  // change handler in 3 parts
  const handleTheSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  console.log(searchInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left ">Search Bookings</h4>
      </div>

      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box"
            {/* onSubmit handler */}
            onSubmit={submitHandler}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                // change handler
                onChange={handleTheSearchInput}
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />

              {/*comment out search button */}
              {/* <button className="btn btn-primary">Search</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
