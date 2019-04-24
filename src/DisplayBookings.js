import React, { Component } from 'react';
import moment from 'moment';

const StayDuration = (dateIn, dateOut) => {
    return moment(dateOut).diff(moment(dateIn), "days");
}

class DisplayBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ""
        }
    }

    handleClick = (index) => {
        let newstack = document.querySelectorAll("tbody tr");
        newstack.forEach((val) => { val.removeAttribute("class") });
        (index.currentTarget.className === "") ? (index.currentTarget.setAttribute("class", "selected")) : index.currentTarget.removeAttribute("class");


    }

    render() {
        return (<tbody>
            {
                this.props.bookingsDetails.map((details, index) => {
                    return (
                        <tr key={index} onClick={((index) => { this.handleClick(index) })} >
                            <th scope="col">{details.id}</th>
                            <td >{details.title}</td>
                            <td>{details.firstName}</td>
                            <td >{details.surname}</td>
                            <td>{details.email}</td>
                            <td>{`00${details.roomId}`}</td>
                            <td>{details.checkInDate}</td>
                            <td>{details.checkOutDate}</td>
                            <td>{StayDuration(details.checkInDate, details.checkOutDate)}</td>
                        </tr >
                    );
                })
            }

        </tbody >
        );
    }

}

export default DisplayBookings