import React from "react";
import FakeBooking from "./data/fakeBookings.json"
import Moment from "react-moment";

const SearchResults = ({ result }) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Room id</th>
                        <th scope="col">Check in date</th>
                        <th scope="col">Check out date</th>
                        <th scope="col">Nights</th>
                    </tr>
                </thead>
                <SearchTable results = {FakeBooking}  />
            </table>
        </div>
    )
}

const SearchTable = ({results}) => {
    return (
        <tbody>
            {results.map((item, index) => (
                <tr key = {index}>
                    <td>{item.title}</td>
                    <td>{item.firstName}</td>
                    <td>{item.surname}</td>
                    <td>{item.email}</td>
                    <td>{item.id}</td>
                    <td><Moment format="DD-MM-YYYY">{item.checkInDate}</Moment></td>
                    <td><Moment format="DD-MM-YYYY">{item.checkOutDate}</Moment></td>
                    <td><Moment diff={item.checkInDate} unit = "days" >{item.checkOutDate}</Moment></td>
                </tr>
            ))}

        </tbody>
    )
}


export default SearchResults;