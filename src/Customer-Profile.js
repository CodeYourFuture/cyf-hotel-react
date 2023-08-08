
const CustomerProfile = ({ clientId, bookings }) => {
    let profile = bookings.filter(booking => {
        return booking.id === clientId
    })
    return (
        <div className="customer-card">
            <h5>Customer Profile # {profile[0].id}</h5>
            <p>{`${profile[0].title} ${profile[0].firstName} ${profile[0].surname}`}</p>
            <p>{profile[0].email}</p>
            <p className="vip">{profile[0].vip && "VIP"}</p>
        </div >

    )
}
export default CustomerProfile