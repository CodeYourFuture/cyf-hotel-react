const TableHead =() => {
    return (
            <thead class="table ">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">First name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Room id</th>
                <th scope="col">Check in date</th>
                <th scope="col">Check out</th>
                
            </tr>
          </thead>
    );
}

const Table = (props) => {
    return(
    <table class="table table-hover">
        <tbody>
        {props.results.map( customer => {
            return (      
        <tr>
            <th scope="row">{customer.id}</th>
            {/* <th scope="row">1</th> */}

            <td>{customer.title}</td>
            <td>{customer.firstName}</td>
            <td>{customer.sureName}</td>
            <td>{customer.email}</td>
            <td>{customer.roomId}</td>
            <td>{customer.checkInDate}</td>
            <td>{customer.checkOutDate}</td>
        </tr>
)})

}
        </tbody>
    </table>
    );
};
export { TableHead ,Table }