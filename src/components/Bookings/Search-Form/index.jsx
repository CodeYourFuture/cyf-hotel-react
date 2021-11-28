import SearchButton from "./SearchButton";

const Search = () => {
  return (
    <form className="form-group d-flex justify-content-center py-3">
      <input type="text" className="form-control w-50" placeholder="Customer name" />
      <SearchButton />
    </form>
  );
};

export default Search;
