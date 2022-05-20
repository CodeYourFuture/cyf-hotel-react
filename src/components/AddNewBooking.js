import React, { useState } from 'react'

export default function AddNewBooking({ newID, setBookings }) {
  function useFormState(initial) {
    const [value, setValue] = useState(initial)
    function setEventValue(event) {
      setValue(event.target.value)
    }
    return [value, setEventValue]
  }
  const [title, setTitle] = useFormState('')
  const [firstName, setFirstName] = useFormState('')
  const [surname, setSurname] = useFormState('')
  const [email, setEmail] = useFormState('')
  const [phone, setPhone] = useFormState('')
  const [roomId, setRoomId] = useFormState('')
  const [checkInDate, setCheckInDate] = useFormState('')
  const [checkOutDate, setCheckOutDate] = useFormState('')
  const [vip, setVip] = useFormState('')

  function handleSubmitEvent(submitEvent) {
    submitEvent.preventDefault()
    const newCustomer = {
      id: newID,
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      phoneNumber: phone,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      vip: vip,
    }
    setBookings((previous) => previous.concat(newCustomer))
  }
  return (
    <>
      <a
        className="btn btn-success mb-4"
        data-toggle="collapse"
        href="#collapseAdd"
        id="collapseAddBtn"
        role="button"
        aria-expanded="false"
        aria-controls="collapseAdd"
      >
        Add new booking
      </a>
      <div className="collapse form-group" id="collapseAdd">
        <form onSubmit={handleSubmitEvent}>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={setTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={setFirstName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                onChange={setSurname}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={setEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                type="phone"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                onChange={setPhone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="roomId">Room ID</label>
              <input
                type="number"
                className="form-control"
                id="roomId"
                name="roomId"
                onChange={setRoomId}
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkInDate">CheckIn Date</label>
              <input
                type="date"
                className="form-control"
                id="checkInDate"
                name="checkInDate"
                onChange={setCheckInDate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOutDate">CheckOut Date</label>
              <input
                type="date"
                className="form-control"
                id="checkOutDate"
                name="checkOutDate"
                onChange={setCheckOutDate}
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="vip"
                name="vip"
                defaultValue={undefined}
                onChange={setVip}
              />
              <label className="form-check-label ml-2" htmlFor="vip">
                {' '}
                Vip
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
