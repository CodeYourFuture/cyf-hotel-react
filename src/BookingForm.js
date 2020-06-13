import React, { useState } from "react";
const BookingForm = props => {
  //  const[newId,setNewId]=useState(null)
  // props.results.map((id,index) => {
  //     // setNewId(id.id)

  // })

  // let newId = props.results.length +1;
  const [data, setData] = useState({
    // id:{newId},
    title: "",
    firstName: "",
    surname: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const submitHandler = event => {
    // setNewId(props.results.length + 1)
    props.updateData(data);
    event.preventDefault();
  };

  const changeHandler = event => {
    const updateData = {
      ...data,
      [event.target.name]: event.target.value
    };
    setData(updateData);
  };

  return (
    <form className="form-inputs" onSubmit={submitHandler}>
      title:
      <input onChange={changeHandler} name="title" type="text" />
      first name:
      <input onChange={changeHandler} name="firstName" type="text" />
      surname:
      <input onChange={changeHandler} name="surname" type="text" />
      room id:
      <input onChange={changeHandler} name="roomId" type="number" />
      check in date:
      <input onChange={changeHandler} name="checkInDate" type="date" />
      check out date:
      <input onChange={changeHandler} name="checkOutDate" type="date" />
      <button>Submit</button>
    </form>
  );
};

export default BookingForm;
