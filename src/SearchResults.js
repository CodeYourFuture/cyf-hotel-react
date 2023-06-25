import React, {useEffect, useState} from "react";
import moment from 'moment';

const SearchResults = (props) => {
    const { results } = props;
    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
        if(results){
            setBookings(results);
        }
    });
    return (
        <div className="searchResult">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">first name</th>
                    <th scope="col">surname</th>
                    <th scope="col">email</th>
                    <th scope="col">room id</th>
                    <th scope="col">check in date</th>
                    <th scope="col">check out date</th>
                    <th scope="col">qty of nights</th>
                </tr>
                </thead>
                <tbody>
                { bookings.map(booking => {
                    const {id, title, firstName, surname, email, roomId, checkInDate, checkOutDate } = booking
                    const nightsQty = moment(checkOutDate).diff(moment(checkInDate), 'days');
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{firstName}</td>
                            <td>{surname}</td>
                            <td>{email}</td>
                            <td>{roomId}</td>
                            <td>{checkInDate}</td>
                            <td>{checkOutDate}</td>
                            <td>{nightsQty}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default SearchResults;
