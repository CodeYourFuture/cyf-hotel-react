import TableHead from "./TableHead.js";
import TableInfo from "./TableInfo.js";
const SearchResults = (props) => {
  return (
    <table className="table">
      <TableHead />
      <TableInfo results={props.results} />
    </table>
  );
};
export default SearchResults;
