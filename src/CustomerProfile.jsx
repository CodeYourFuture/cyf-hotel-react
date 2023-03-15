import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
    // const [client, setClient] = useState("");

    return props.id;



    // let id = props.id;

    // useEffect(() => {
    //     fetch(`https://cyf-react.glitch.me/customers/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setClient(data))
    //     .catch((err) => console.log(err))
    // }, [id]);

    // if (client.id) {
    //     return (
    //     <p>Customer {props.id} Profile</p>
    // )
    // }
}

export default CustomerProfile;