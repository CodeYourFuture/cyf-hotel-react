import { useState } from "react";
import SearchResults from "./SearchResults";
import moment from "moment";


const InputFormForTable = ({ bookings, setBookings }) => {
    const [title, setTitle] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [roomId, setRoomId] = useState("")
    const [checkInDate, setCheckInDate] = useState("")
    const [checkOutDate, setCheckOutDate] = useState("")
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmitForm(event) {
        event.preventDefault()
        const newCustomer = {
            title, firstName, surname, email, checkInDate, checkOutDate, roomId
        }
        let res = await fetch("https://olha-danylevska-hotel-booking-server.onrender.com/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCustomer)
        })

        if (res.ok) {
            let response = await res.json()
            fetch("https://olha-danylevska-hotel-booking-server.onrender.com/bookings")
                .then((response) => {
                    if (!response.ok) {
                        console.log(response.status)
                        setBookings(response.status)
                        throw new Error(response.status)
                    } else {
                        return response.json()
                    }

                })
                .then((data) => {
                    data && setBookings(data)
                })
            setErrorMessage("")
        } else {
            if (moment(checkInDate).isAfter(moment(checkOutDate))) {
                setErrorMessage("Check Out date should be after Check in date")
            } else {
                setErrorMessage("Please fill in missing areas")
            }
        }
    }

    return (
        <div>
            {
                bookings.length > 0 ? (<SearchResults bookings={bookings} setBookings={setBookings} />)
                    : bookings !== 500 ? (<span>Loading... </span>) : (<span className="error-message"> Error 500</span>)
            }
            <div className="holder-for-customer-form">
                <h5>Add New Customer</h5>
                {errorMessage !== "" && <p className="error-message"> {errorMessage} </p>}
                <form className="form" onSubmit={handleSubmitForm} autocomplete="off">
                    <input autocomplete="false" name="hidden" type="text" class="hidden"></input>
                    <div className="holder-for-inputs">
                        <label htmlFor="title">
                            Title
                            <select type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="title">
                                <option default>Title</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                <option value="Madam">Madam</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Dame">Dame</option>
                                <option value="Prince">Prince</option>
                                <option value="Princess">Princess</option>
                            </select>
                        </label>

                        <label htmlFor="firstName" >
                            First Name
                            <input autocomplete="off" type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}  ></input>
                        </label>

                        <label htmlFor="surname" >
                            Surename
                            <input autocomplete="off" type="text" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)}></input>
                        </label>

                        <label htmlFor="email">
                            Email
                            <input autocomplete="off" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                        </label>
                        <label htmlFor="roomId">
                            Roon ID
                            <input type="roomId" name="roomId" className="room-id" value={roomId} onChange={(e) => setRoomId(e.target.value)} ></input>
                        </label>
                        <label htmlFor="checkinDate">
                            Check in Date
                            <input type="date" name="checkInDate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)}></input>
                        </label>

                        <label htmlFor="checkoutDate" >
                            Check out Date
                            <input type="date" name="checkOutDate" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)}></input>
                        </label>
                    </div>

                    <input type="submit" className="form-submit"></input>
                </form>
            </div >
        </div >
    )
}

export default InputFormForTable


    // const handleIputs = (event) => {
    //     const key = event.target.name;
    //     const value = event.target.value;

    //     setNewCustomer(values => ({
    //         ...values,
    //         [key]: value,
    //     }));
    // }



    // const handleSubmitForm = (event) => {
    //     event.preventDefault()
    //     setNewCustomer(newCustomer.id = bookings.length + 1)
    //     setBookings([...bookings, newCustomer])
    // }