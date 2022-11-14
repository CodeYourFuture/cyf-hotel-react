import React from "react";
import moment from "moment";

const SearchResult = ({results}) =>
{
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>First name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Room id</th>
                    <th>Check in date</th>
                    <th>Check out date</th>
                    <th>Number of nights</th>
                </tr>
            </thead>
            
            <tbody>
                {results.map(element => 
                (
                    <tr>
                        <th>{element.id}</th>
                        <th>{element.title}</th>
                        <th>{element.firstName}</th>
                        <th>{element.surname}</th>
                        <th>{element.email}</th>
                        <th>{element.roomId}</th>
                        <th>{element.checkInDate}</th>
                        <th>{element.checkOutDate}</th>
                        <th>{moment(element.checkOutDate).diff(moment(element.checkInDate), "days")}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SearchResult;