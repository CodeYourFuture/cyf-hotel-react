import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
    console.log(props.userId)
    const [customerProfile, setCustomerProfile] = useState([])

    useEffect(() => {
        fetch(`https://cyf-react.glitch.me/customers/${props.userId}`)
            .then(res => res.json())
            .then(data => console.log(data))

    }, [props.userId])
    if (!customerProfile) {

    } else
        return (
            <ul>
                <li>{props.id}</li>
                <li>{props.email}</li>
                <li>{props.photo}</li>
            </ul>
        )
}


export default CustomerProfile;