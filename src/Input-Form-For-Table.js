import { useState } from "react";
import SearchResults from "./SearchResults";



const InputFormForTable = ({ bookings, setBookings }) => {
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [roomId, setRoomId] = useState("")
    const [checkInDate, setCheckInDate] = useState("")
    const [checkOutDate, setCheckOutDate] = useState("")

    function doingFetch() {
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
    }

    async function handleSubmitForm(event) {
        event.preventDefault()
        const newCustomer = {
            id, title, firstName, surname, roomId, email, checkInDate, checkOutDate
        }

        let res = await fetch("https://olha-danylevska-hotel-booking-server.onrender.com/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCustomer)
        })
        let resJson = await res.json()
        console.log(resJson)
        doingFetch()
    }

    return (
        <div>
            {
                bookings.length > 0 ? (<SearchResults bookings={bookings} />)
                    : bookings !== 500 ? (<span>Loading... </span>) : (<span className="error-message"> Error 500</span>)
            }
            <div className="holder-for-customer-form">
                <h5>Add New Customer</h5>
                <form className="form" onSubmit={handleSubmitForm}>
                    <div className="holder-for-inputs">
                        <label htmlFor="title">
                            Title
                            <select type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="title">
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Mrs</option>
                                <option value="Madam">Madam</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Dame">Dame</option>
                                <option value="Prince">Prince</option>
                                <option value="Princess">Princess</option>
                            </select>
                        </label>

                        <label htmlFor="firstName" >
                            First Name
                            <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                        </label>

                        <label htmlFor="surname" >
                            Surename
                            <input type="text" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)}></input>
                        </label>

                        <label htmlFor="email">
                            Email
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
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
            </div>
        </div>
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