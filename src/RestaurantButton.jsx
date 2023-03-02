import React from "react"
export default function RestaurantButton({ onClick }) {
  return <button className="btn btn-primary" onClick={onClick}>
    Add
  </button>
}