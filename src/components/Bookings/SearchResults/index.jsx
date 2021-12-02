import Row from "./Row";

function SearchResults({ results, handleChangeId }) {
  const tableHead = [
    "ID",
    "Title",
    "FirstName",
    "Surname",
    "Email",
    "Room ID",
    "Check in Date",
    "Check out Date",
    "Nights",
    "Actions",
  ];

  return (
    <table className="table text-center mt-2">
      <caption className="caption-top text-center">Customers</caption>
      <thead className="table-secondary">
        <tr>
          {tableHead.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((person, index) => (
          <Row key={index} person={person} handleChangeId={handleChangeId} />
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
