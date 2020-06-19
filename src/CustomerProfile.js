import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
    const [customerProfile, setCustomerProfile] = useState([])
    useEffect((props) => {
        fetch(`https://cyf-react.glitch.me/customers/{props.setId}`)
            .then(res => res.json())
            .then(data => console.log(setCustomerProfile(data)))

    }, [])

    return (
        <div>
            <button className="tableButton">{props.id} show profile</button>
        </div>

    )

}


export default CustomerProfile;