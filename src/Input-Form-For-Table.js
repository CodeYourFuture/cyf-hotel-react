import { useState } from "react"
const InputFormForTable = () => {

    const [newCustomer, setNewCustomer] = useState({})

    const handleIputs = (event) => {
        const key = event.target.name;
        const value = event.target.value;


        setNewCustomer(values => ({
            ...values,
            [key]: value,
        }));
    }


    const handleSubmitForm = (event) => {
        event.preventDefault()
        console.log({
            title: newCustomer.title,
            fname: newCustomer.firstName,
            surname: newCustomer.surname,
            email: newCustomer.email,
            checkinDate: newCustomer.checkinDate,
            checkoutDate: newCustomer.checkinDate,
        })

    }

    return (
        <div className="holder-for-customer-form">
            <form className="form" onSubmit={handleSubmitForm}>

                <label htmlFor="title">
                    Title
                    <select type="text" id="title" name="title" value={newCustomer.title} onChange={handleIputs}>
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
                    <input type="text" name="firstName" value={newCustomer.fname} onChange={handleIputs}></input>
                </label>

                <label htmlFor="surname" >
                    Surename
                    <input type="text" name="surname" value={newCustomer.surname} onChange={handleIputs}></input>
                </label>

                <label htmlFor="email">
                    Email
                    <input type="email" name="email" value={newCustomer.email} onChange={handleIputs}></input>
                </label>

                <label htmlFor="checkinDate">
                    Check in Date
                    <input type="date" name="checkinDate" value={newCustomer.checkinDate} onChange={handleIputs}></input>
                </label>


                <label htmlFor="checkoutDate" >
                    Check out Date
                    <input type="date" name="checkoutDate" value={newCustomer.checkoutDate} onChange={handleIputs}></input>
                </label>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default InputFormForTable