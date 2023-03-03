
const TableHead =() => {
    return (
            <thead class="table ">
            <tr>
                <th scope="col">#</th>
                <th scope="col">title</th>
                <th scope="col">first name</th>
                <th scope="col">surname</th>
                <th scope="col">email</th>
                <th scope="col">room id</th>
                <th scope="col">check in date</th>
                <th scope="col">check out</th>
            </tr>
          </thead>
    );
}



const Table = (props) => {
    return(
    <table class="table table-hover">
        
        <tbody>
        <tr>
            <th scope="row">{props.id}</th>
            {/* <th scope="row">1</th> */}

            <td>{props.title}</td>
            <td>{props.firstName}</td>
            <td>{props.sureName}</td>
            <td>{props.email}</td>
            <td>{props.roomId}</td>
            <td>{props.checkIndate}</td>
            <td>{props.checkOutDate}</td>
        </tr>

        </tbody>
    </table>
    );
};
export { TableHead ,Table }