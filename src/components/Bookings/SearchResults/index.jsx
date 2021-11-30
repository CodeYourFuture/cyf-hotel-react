import Row from "./Row";

function SearchResults({ results }) {
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
  ];

  return (
    <table className="table table-striped text-center mt-2">
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
          <Row key={index} person={person} />
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
