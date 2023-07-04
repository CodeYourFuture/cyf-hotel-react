import TableHead from "./TableHead.js";
import TableBody from "./TableBody.js";

const SearchResults = (props) => {
  return (
    <table className="table">
      <TableHead />
      <TableBody results={props.results} />
    </table>
  );
};
export default SearchResults;
