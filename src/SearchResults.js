import React, {useState} from "react";
import moment from 'moment';
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
    const { results } = props;
    const [selected, setSelected] = useState(null);
    const [customerProfile, setCustomerProfile] = useState(null);
    const handleRowClick = (id) => () => {
        setSelected(id);
    }

    const showCustomerProfile = (id) => () => {
        setCustomerProfile(id)
    }

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
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {results && results.map(booking => {
                    const {id, title, firstName, surname, email, roomId, checkInDate, checkOutDate } = booking;
                    const nightsQty = moment(checkOutDate).diff(moment(checkInDate), 'days');
                    return (
                        <tr key={id} onClick={handleRowClick(id)} className={selected === id ? 'selected' : null}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{firstName}</td>
                            <td>{surname}</td>
                            <td>{email}</td>
                            <td>{roomId}</td>
                            <td>{checkInDate}</td>
                            <td>{checkOutDate}</td>
                            <td>{nightsQty}</td>
                            <td><button className="btn btn-outline-secondary" onClick={showCustomerProfile(id)}>Show profile</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {customerProfile ? <CustomerProfile id={customerProfile}/> : null}
        </div>
    );
};

export default SearchResults;
