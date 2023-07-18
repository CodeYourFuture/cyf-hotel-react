// import { useState, useEffect } from "react"


// const CustomerProfile = ({ customerProf, newCustomer }) => {
//     const [user, setUser] = useState([])
//     function fetchingId() {
//         fetch(`https://cyf-react.glitch.me/customers/${customerProf}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(response.status)
//                 } else {
//                     return response.json()
//                 }
//             })
//             .then((data) => {
//                 if (data) {
//                     setUser(data)
//                 }
//             })
//     }
//     useEffect(() => {
//         fetchingId()
//     }, [customerProf])

//     return (<div className="customer-card">
//         <h5>Customer Profile # {customerProf}</h5>
//         <p>{user.email}</p>
//         <p>{user.phoneNumber}</p>
//         <p className="vip">{user.vip && "VIP"}</p>
//     </div >)
// }
// export default CustomerProfile