import { useState, useEffect } from "react"


const CustomerProfile = ({ user }) => {

    return (
        <div className="customer-card">
            <h5>Customer Profile # {user.id}</h5>
            <p>{user.email}</p>
            <p>{`${user.title} ${user.firstName} ${user.surname}`}</p>
            <p className="vip">{user.vip && "VIP"}</p>
        </div >

    )
}
export default CustomerProfile