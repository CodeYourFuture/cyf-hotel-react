import React from "react";
import moment from 'moment';

const SearchResults = (props) => {
    return (
        <table class="table">
            <thead class="table table-striped">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Room ID</th>
                    <th scope="col">Check-in Date</th>
                    <th scope="col">Check-out Date</th>
                    <th scope="col">Night Stay</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.results.map(result => {
                        return (
                            <tr>
                                <th scope="row">{result.id}</th>
                                <td>{result.title}</td>
                                <td>{result.firstName}</td>
                                <td>{result.surname}</td>
                                <td>{result.email}</td>
                                <td>{result.roomId}</td>
                                <td>{result.checkInDate}</td>
                                <td>{result.checkOutDate}</td>
                                <td>{moment(result.checkOutDate).diff(result.checkInDate, 'days')}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default SearchResults;