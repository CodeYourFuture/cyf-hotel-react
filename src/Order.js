import { SearchButton } from './SearchButton'
import { useState } from 'react'

export const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0)

  const orderOne = () => {
    setOrders(orders + 1)
  }

  return (
    <li>
      {`${orderType}: ${orders} `}
      <SearchButton onClick={orderOne} className="btn btn-primary">
        Add
      </SearchButton>
    </li>
  )
}
