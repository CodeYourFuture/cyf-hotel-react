import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const SearchResults = props => (
  <table className="table">
    <TableHeader />
    <tbody>
      {props.results.map(eachPerson => (
        <TableRow data={eachPerson} />
      ))}
    </tbody>
  </table>
);

export default SearchResults;
