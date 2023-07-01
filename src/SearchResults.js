import moment from "moment"
import { useState } from "react"
import CustomerProfile from "./Customer-Profile"

const SearchResults = ({ bookings }) => {
    const [active, setActive] = useState(false)
    const [clientId, setClientId] = useState("")
    const [customerProf, setCuctomerProf] = useState("")
    const [isShown, setIsShown] = useState(false);

    let handleProfileClick = (client) => {
        setCuctomerProf(client)
        setIsShown(!isShown)
    }

    const handleClick = (id) => {
        setActive(!active)
        setClientId(id)
    }
    return (
        <div className="table-holder">
            <table className="table">

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
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map(client => {
                            let a = moment(client.checkOutDate)
                            let b = moment(client.checkInDate)

                            return (

                                <tr key={client.id} onClick={() => { handleClick(client.id) }} className={active && clientId === client.id ? "pressed" : ""}>
                                    <th scope="row">{client.id}</th>
                                    <td>{client.title}</td>
                                    <td>{client.firstName}</td>
                                    <td>{client.surname}</td>
                                    <td>{client.email}</td>
                                    <td>{client.roomId}</td>
                                    <td>{client.checkInDate}</td>
                                    <td>{client.checkOutDate}</td>
                                    <td>{a.diff(b, 'days')}</td>
                                    <td><button onClick={(e) => { e.stopPropagation(); handleProfileClick(client.id) }} className="id-info">Show profile</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {isShown ? <CustomerProfile customerProf={customerProf} /> : null}

        </div>
    )
}

//className={"clickable-row ".concat(active === client.id ? "selected" : "")
export default SearchResults;


