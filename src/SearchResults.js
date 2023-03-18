import TableHead from "./TableHead";
import TableRow from "./TableRow";

const SearchResults = (props) => {
  return (
    <table className="table table-bordered table-hover table-responsive">
      <TableHead />
      <tbody>
        {props.results.map((value) => (
          <TableRow value={value} />
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults;
