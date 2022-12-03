import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
  
const SearchResults = ({ results }) =>
{
    const [customerID, setCustomerID] = useState();
    const checkClick = (selectedID) =>
    {
        setCustomerID(selectedID);
    }

    return (
    <div>
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {results.map(element =>
                {
                    return (
                        <ResultRow element = {element} checkClick = {checkClick}/>
                    );
                })}
            </tbody>
        </table>
        {customerID && <CustomerProfile id={customerID}/>}
    </div>
    );
}

const ResultRow = ({ element, checkClick }) =>
{
    const [isBackgroundHightlighted, setBackground] = useState("white");

    const setColor = () =>
    {        
        if(isBackgroundHightlighted === "white")
        {
            setBackground("grey");
        }
        
        else if(isBackgroundHightlighted === "grey")
        {
            setBackground("white");
        }
    }
    
    return (
    <tr onClick={() => {setColor(isBackgroundHightlighted)}} style={{backgroundColor: isBackgroundHightlighted}}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{element.firstName}</td>
        <td>{element.surname}</td>
        <td>{element.email}</td>
        <td>{element.roomId}</td>
        <td>{element.checkInDate}</td>
        <td>{element.checkOutDate}</td>
        <td>{moment(element.checkOutDate).diff(moment(element.checkInDate), "days")}</td>
        <td><button onClick={() => checkClick(element.id)}>Show profile</button></td>
    </tr>
    );
}

export default SearchResults;
