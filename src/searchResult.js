import moment from "moment";



const [rowISActive, setRowIsActive] = useState(false);

  function handleRowClick(id) {
    if (rowISActive) {
      setRowIsActive(false);
    } else {
      setRowIsActive(id);
    }
    // console.log(`Row ${event.key} is clicked!`)
    // setRowIsActive()
  }

  
const SearchResult = props => {
  let a = moment(props.checkInDate)
  
  let b = moment(props.checkOutDate)
  return (
      <tr className="text-center">
        <th scope="row">{props.id}</th>
        <td>{props.title}</td>
        <td>{props.firstName}</td>
        <td>{props.surname}</td>
        <td>{props.email}</td>
        <td>{props.roomId}</td>
        <td>{props.checkInDate}</td>
        <td>{props.checkOutDate}</td>
        <td>{b.diff(a,"days")}</td>
      </tr>
  );
};

export default SearchResult;