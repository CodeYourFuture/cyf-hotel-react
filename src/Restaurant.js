import React, { useState } from 'react'

let srcPath = ''

const Restaurant = () => {
  return (
    <div className="container restaurant">
      <h3>Restaurant Orders</h3>
      <div className="card-deck align-items-center">
        <div className="card">
          <Order orderType="Pizzas" />
        </div>
        <div className="card">
          <Order orderType="Burgers" />
        </div>
        <div className="card">
          <Order orderType="Hotdogs" />
        </div>
        <div className="card">
          <Order orderType="Chips" />
        </div>
      </div>
    </div>
  )
}

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0)
  const orderOnePlus = () => setOrders(orders + 1)
  const orderOneLess = () => orders > 0 && setOrders(orders - 1)
  srcPath = `./assets/icons/${orderType}.svg`
  return (
    <>
      <img className="card-img-top" src={srcPath} alt={orderType} />
      <div className="card-body d-flex justify-content-center">
        <number>{orders}</number>
      </div>
      <div className="d-flex justify-content-center w-100">
        <img src="./assets/icons/plus.png" alt="plus" className="btn btn-primary m-1 w-25" onClick={orderOnePlus}/> 
        
        <img src="./assets/icons/subtract.png" alt="subtract" className="btn btn-primary m-1 w-25" onClick={orderOneLess}/>
      </div>
    </>
  )
}

export default Restaurant
