import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [id, setId] = useState("");

  return (
    <>
      <table className="table">
        <TableHeader {...props.results} />
        <tbody>
          {props.results.map(eachPerson => {
            return (
              <TableRow key={eachPerson.id} {...eachPerson} setId={setId} />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={id} />
    </>
  );
};

export default SearchResults;
