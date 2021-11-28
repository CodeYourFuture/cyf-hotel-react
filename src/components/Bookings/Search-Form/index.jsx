import SearchButton from "./SearchButton";

const Search = () => {
  return (
    <>
      <h4>Search Bookings</h4>
      <div className="row mt-3">
        <div className="col">
          <form className="form-group search-box">
            <div className="d-flex justify-content-center mt-3">
              <input type="text" className="form-control w-50" placeholder="Customer name" />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
