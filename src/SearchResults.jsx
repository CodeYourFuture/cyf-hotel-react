import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const SearchResults = props => (
  <table className="table">
    <TableHeader {...props.results} />
    <tbody>
      {props.results.map(eachPerson => (
        <TableRow key={eachPerson.id} {...eachPerson} />
      ))}
    </tbody>
  </table>
);

export default SearchResults;
