import moment from "moment"
import { useState } from "react"
import CustomerProfile from "./Customer-Profile"
import EditWindow from "./EditWindow"

const SearchResults = ({ bookings, setBookings }) => {

    const [active, setActive] = useState(false)
    const [clientId, setClientId] = useState("")
    const [customerProf, setCustomerProfile] = useState({})
    const [isShown, setIsShown] = useState(false);
    const [rowClicked, setRowClicked] = useState("desc")
    const [edit, setEdit] = useState(false)

    function fetchingId(customerProf) {

        //get single booking for profile
        fetch(`https://olha-danylevska-hotel-booking-server.onrender.com/bookings/${customerProf}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status)
                } else {
                    return response.json()
                }
            })
            .then((data) => {
                if (data) {
                    setUser(data[0])
                    console.log(data[0])
                }
            })
    }

    //Profile

    let handleProfileClick = (id) => {
        setClientId(id)
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

    //sorting columns with dates
    const handleDateSorting = (refCol) => {
        if (rowClicked === "desc") {
            bookings.sort((a, b) => {
                return moment(a[refCol]).diff(b[refCol])
            })
            setRowClicked("asc")
        }
        if (rowClicked === "asc") {
            bookings.sort((a, b) => {
                return moment(b[refCol]).diff(a[refCol])
            })
            setRowClicked("desc")
        }
    }

    const handleEditButton = (id) => {
        setEdit(true)
        setClientId(id)
    }
    //delete client from the table
    const handleDeleteButton = (id) => {
        fetch(`https://olha-danylevska-hotel-booking-server.onrender.com/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(error => console.error(error));
    }

    // sorting columns with numbers
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
            {edit && <EditWindow setEdit={setEdit} setBookings={setBookings} bookings={bookings} clientId={clientId} />}

            <table className="table">
                <thead>
                    <tr className="title-table" >
                        <th scope="col" onClick={() => (handleSortingNumbers("id"))}>ID</th>
                        <th scope="col" onClick={() => (handleSorting("title"))}>Title</th>
                        <th scope="col" onClick={() => (handleSorting("firstName"))}>First Name</th>
                        <th scope="col" onClick={() => (handleSorting("surname"))}>Surname</th>
                        <th scope="col" onClick={() => (handleSorting("email"))}>Email</th>
                        <th scope="col" onClick={() => (handleSortingNumbers("roomId"))}>Room ID</th>
                        <th scope="col" onClick={() => (handleDateSorting("checkInDate"))}>Check In Date</th>
                        <th scope="col" onClick={() => (handleDateSorting("checkOutDate"))}>Check Out Date</th>
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
                                <tr key={client.id} onClick={() => { handleClick(client.id) }} className={active && clientId === client.id ? "pressed" : ""} >
                                    <th scope="row">{client.id}</th>
                                    <td>{client.title}</td>
                                    <td>{client.firstName}</td>
                                    <td>{client.surname}</td>
                                    <td>{client.email}</td>
                                    <td>{client.roomId}</td>
                                    <td>{client.checkInDate}</td>
                                    <td>{client.checkOutDate}</td>
                                    <td>{a.diff(b, 'days')}</td>
                                    <td className="buttons-td">
                                        <button onClick={(e) => { e.stopPropagation(); handleProfileClick(client.id) }} className="id-info">Show profile</button>
                                        <div className="buttons-edit-delete">
                                            <button className="edit-button" onClick={() => { handleEditButton(client.id) }}>Edit</button>
                                            <button className="delete-profile" onClick={() => { handleDeleteButton(client.id) }}>Delete</button>
                                        </div>

                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {isShown ? <CustomerProfile bookings={bookings} setClientId={setClientId} clientId={clientId} className="customer-prof" /> : null}
        </div>
    )
}

//className={"clickable-row ".concat(active === client.id ? "selected" : "")
export default SearchResults;


