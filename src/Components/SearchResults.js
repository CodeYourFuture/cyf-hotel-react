import { useState } from "react";
import TableHead from "./TableHead.js";
import TableInfo from "./TableInfo";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  const [showId, setShowId] = useState("");
  const IdCheck = (id) => {
    setShowId(id);
    console.log({ showId });
  };
  return (
    <>
      {showId && <CustomerProfile id={showId} />}
      <table className="table">
        <TableHead />
        <tbody>
          {props.results.map((result, id) => {
            return <TableInfo key={id} result={result} idCheck={IdCheck} />;
          })}
        </tbody>
      </table>
    </>
  );
};
export default SearchResults;
