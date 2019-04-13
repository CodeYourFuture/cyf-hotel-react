import React from "react";

const SearchResults = props => {
    return (
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    {/* <th scope="col">ID</th> */}
                    <th scope="col">Tittle</th>
                    {/* <th scope="col">Handle</th> */}
                    <th scope="col">FirstName</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Room ID</th>
                    <th scope="col">Check In</th>
                    <th scope="col">Check Out</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(result => {
                    return (
                        <tr>
                            <th scope="row">{result.id}</th>
                            <td>{result.tittle}</td>
                            <td>{result.firstName}</td>
                            <td>{result.surName}</td>
                            <td>{result.email}</td>
                            <td>{result.roomId}</td>
                            <td>{result.checkInDate}</td>
                            <td>{result.checkOutDate}</td>
                        </tr>
                    );
                })}

            </tbody>
        </table>
    );
};

export default SearchResults;
