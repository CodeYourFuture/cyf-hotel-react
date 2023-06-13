const TableBody = (props) => {
  return (
    <tbody>
      {props.results.map((result) => {
        return (
          <tr>
            <td scope="row">{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
          </tr>
        );
      })}
      ;
    </tbody>
  );
};

export default TableBody;
