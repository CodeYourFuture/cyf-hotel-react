import { useState } from "react";
import TableInfo from "./TableInfo";
import CustomerProfile from "./CustomerProfile";

const TableBody = (props) => {
  const [showId, setShowId] = useState("");
  const IdCheck = (id) => {
    setShowId(id);
    console.log({ showId });
  };
  return (
    <>
      <table>
        <tbody>
          {props.results.map((result, id) => {
            return <TableInfo key={id} result={result} idCheck={IdCheck} />;
          })}
        </tbody>
      </table>
      {showId && <CustomerProfile id={showId} />}
    </>
  );
};
export default TableBody;
