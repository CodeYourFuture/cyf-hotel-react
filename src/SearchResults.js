import moment from "moment"
import React, { useState } from "react"


const SearchResults = (props) => {
    let allData = props.results
    return (
        <table class="table table-striped">

            <thead>

                <tr className="title-table">
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Room ID</th>
                    <th scope="col">Check In Date</th>
                    <th scope="col">Check Out Date</th>
                    <th scope="col">Nights</th>
                </tr>
            </thead>
            <tbody>
                {

                    allData.map(client => {
                        let a = moment(client.checkOutDate)
                        let b = moment(client.checkInDate)
                        const [active, setActive] = useState(false)
                        const handleClick = () => {
                            setActive(!active)
                        }
                        return (
                            <tr onClick={handleClick} style={{ backgroundColor: active ? "#607042" : "#797979" }}>
                                <th scope="row">{client.id}</th>
                                <td>{client.title}</td>
                                <td>{client.firstName}</td>
                                <td>{client.surname}</td>
                                <td>{client.email}</td>
                                <td>{client.roomId}</td>
                                <td>{client.checkInDate}</td>
                                <td>{client.checkOutDate}</td>
                                <td>{a.diff(b, 'days')}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default SearchResults;


