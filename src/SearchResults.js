import moment from "moment"
import { useState } from "react"
import CustomerProfile from "./Customer-Profile"

const SearchResults = ({ bookings, newCustomer }) => {

    const [active, setActive] = useState(false)
    const [clientId, setClientId] = useState("")
    const [customerProf, setCuctomerProf] = useState("")
    const [isShown, setIsShown] = useState(false);
    const [rowClicked, setRowClicked] = useState("desc")
    let handleProfileClick = (client) => {

        setCuctomerProf(client)
        setIsShown(!isShown)
    }

    const handleClick = (id) => {
        setActive(!active)
        setClientId(id)
    }

    const handleSorting = (referenceCol) => {
        console.log("hello")
        if (rowClicked === "desc") {
            bookings.sort((a, b) => {
                let fa = a[referenceCol].toLowerCase(),
                    fb = b[referenceCol].toLowerCase();

                if (fa < fb) { return -1 }
                if (fa > fb) { return 1 }
                return 0;
            })
            setRowClicked("asc")
        } else if (rowClicked === "asc") {
            bookings.sort((a, b) => {
                let fa = a[referenceCol].toLowerCase(),
                    fb = b[referenceCol].toLowerCase();

                if (fb < fa) { return -1 }
                if (fb > fa) { return 1 }
                return 0;
            })
            setRowClicked("desc")
        }
    }


    const handleSortingNumbers = (refCol) => {
        if (rowClicked === "desc") {
            bookings.sort((a, b) => {
                return a[refCol] - b[refCol]
            })
            setRowClicked("asc")
        }
        if (rowClicked === "asc") {
            bookings.sort((a, b) => {
                return b[refCol] - a[refCol]
            })
            setRowClicked("desc")
        }
    }
    return (
        <div className="table-holder">
            <table className="table">
                <thead>
                    <tr className="title-table" >
                        <th scope="col" onClick={() => (handleSortingNumbers("id"))}>ID</th>
                        <th scope="col" onClick={() => (handleSorting("title"))}>Title</th>
                        <th scope="col" onClick={() => (handleSorting("firstName"))}>First Name</th>
                        <th scope="col" onClick={() => (handleSorting("surname"))}>Surname</th>
                        <th scope="col" onClick={() => (handleSorting("email"))}>Email</th>
                        <th scope="col" onClick={() => (handleSortingNumbers("roomId"))}>Room ID</th>
                        <th scope="col" onClick={() => (handleSortingNumbers("chekInDate"))}>Check In Date</th>
                        <th scope="col" onClick={() => (handleSortingNumbers("checkOutDate"))}>Check Out Date</th>
                        <th scope="col" >Nights</th>
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
            {isShown ? <CustomerProfile customerProf={customerProf} bookings={bookings} /> : null}

        </div>
    )
}

//className={"clickable-row ".concat(active === client.id ? "selected" : "")
export default SearchResults;


