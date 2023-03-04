const SearchResults = (props) => {
    console.log(props);
  return (
      <tbody>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.title}</td>
          <td>{props.firstName}</td>
          <td>{props.surname}</td>
          <td>{props.email}</td>
          <td>{props.roomId}</td>
          <td>{props.checkInDate}</td>
          <td>{props.checkOutDate}</td>
          <td>{props.numberOfNights}</td>
        </tr>
      </tbody>
  );
};

export default SearchResults;
