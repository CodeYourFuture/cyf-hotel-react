import moment from "moment";

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

  const getDifference = (date1, date2) => {
    const start = new moment(date1);
    const end = new moment(date2);
    return end.diff(start, "days");
  };

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
        {results.map((person, index) => {
          const { checkInDate, checkOutDate } = person;
          return (
            <tr key={index}>
              {Object.keys(person).map((props, i) => (
                <td key={i}>{person[props]}</td>
              ))}
              <td>{getDifference(checkInDate, checkOutDate)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
