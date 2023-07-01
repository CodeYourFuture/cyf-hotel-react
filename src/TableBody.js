import TableInfo from "./TableInfo";

const TableBody = (props) => {
  return (
    <tbody>
      {props.results.map((result) => {
        return <TableInfo result={result} />;
      })}
      ;
    </tbody>
  );
};
export default TableBody;
