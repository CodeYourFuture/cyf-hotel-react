import React, { useState, useEffect } from 'react'

const Profile = (props) => {
  const [detailData, setDetailData] = useState({})

  useEffect(() => {
    fetch(`https://davood-hotel-server.glitch.me/bookings/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailData(data)
      })
  }, [props.id])
  return (
    <div className="collapse" id="collapseShowDetail">
      <div className="detail card-body">
        <ul className="list-group">
          <li className="list-group-item">
            <strong>ID: </strong>
            {detailData.id}
          </li>
          <li className="list-group-item">
            <strong>Title: </strong>
            {detailData.title}
          </li>
          <li className="list-group-item">
            <strong>First Name: </strong>
            {detailData.firstName}
          </li>
          <li className="list-group-item">
            <strong>Surname: </strong>
            {detailData.surname}
          </li>
          <li className="list-group-item">
            <strong>Email: </strong>
            {detailData.email}
          </li>
          <li className="list-group-item">
            <strong>Phone Number: </strong>
            {detailData.phoneNumber}
          </li>
          <li className="list-group-item">
            <strong>Vip: </strong>
            <input type="checkbox" checked={detailData.vip} />
          </li>
        </ul>
        <button
          className="btn btn-success mt-3"
          data-toggle="collapse"
          href="#collapseShowDetail"
          aria-expanded="false"
          aria-controls="collapseShowDetail"
        >
          Hide profile
        </button>
      </div>
    </div>
  )
}

export default Profile
