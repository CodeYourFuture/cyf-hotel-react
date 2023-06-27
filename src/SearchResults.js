import moment from "moment"
import { useEffect, useState } from "react"

const CustomerProfile = ({ customerProf }) => {
    const [user, setUser] = useState([])
    function fetchingId() {
        fetch(`https://cyf-react.glitch.me/customers/${customerProf}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status)
                } else {
                    return response.json()
                }
            })
            .then((data) => {
                if (data) {
                    setUser(data)
                }
            })
    }
    useEffect(() => {
        fetchingId()
    }, [customerProf])

    console.log("data----->", user)

    return (<div className="customer-card">
        <h5>Customer Profile # {customerProf}</h5>
        <p>{user.email}</p>
        <p>{user.phoneNumber}</p>
        <p className="vip">{user.vip && "VIP"}</p>
    </div >)
}

const SearchResults = ({ bookings }) => {
    const [active, setActive] = useState(true)
    const [clientId, setClientId] = useState("")
    const [customerProf, setCuctomerProf] = useState("")
    const [isShown, setIsShown] = useState(false);

    let handleProfileClick = (client) => {
        setCuctomerProf(client)
        setIsShown(true)
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
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map(client => {
                            let a = moment(client.checkOutDate)
                            let b = moment(client.checkInDate)

                            return (

                                <tr key={client.id} onClick={() => { setActive(!active); setClientId(client.id) }} className={active && clientId === client.id ? 'background-red' : 'background-blue'}>
                                    <th scope="row">{client.id}</th>
                                    <td>{client.title}</td>
                                    <td>{client.firstName}</td>
                                    <td>{client.surname}</td>
                                    <td>{client.email}</td>
                                    <td>{client.roomId}</td>
                                    <td>{client.checkInDate}</td>
                                    <td>{client.checkOutDate}</td>
                                    <td>{a.diff(b, 'days')}</td>
                                    <td><button onClick={(e) => { e.stopPropagation(); handleProfileClick(client.id) }}>Show profile</button></td>
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


