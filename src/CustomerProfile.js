export const CustomerProfile = ({ data }) => {
  return (
    <article className="customerProfile">
      {data.map((cust) => {
        return (
          <ul>
            <li>Customer Id: {cust.id}</li>
            <li>Email: {cust.email}</li>
            <li>VIP status: {cust.vip === true}</li>
            <li>Phone Number: {cust.phone}</li>
          </ul>
        )
      })}
    </article>
  )
}
