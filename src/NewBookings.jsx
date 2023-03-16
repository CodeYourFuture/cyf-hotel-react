import React, { useState } from "react";
const NewBookings = ({func}) => {
    const [name, setName] = useState('');

     const changeName = (event) => {
    setName(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name
    };
    console.log(val)
    func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
  };
  
  
  return (
    <div>
      <form>
        <label>
          Enter your name:
          <input type="text" name="name" value={name}  onChange={changeName}/>
        </label>
        <label>
          Enter your surname:
          <input type="text" name="surname" />
        </label>
        <label>
          Enter your email:
          <input type="text" name="email"/>
        </label>
        <label>
          Enter your title:
          <input type="text" name="title" />
        </label>
        <label>
          your room id:
          <input type="text" name="roomId"/>
        </label>
        <label>
          Check in date:
          <input type="text" name="check-in-date" />
        </label>
        <label>
          Check out date:
          <input type="text" name="check-out-date" />
        </label>
        <button onClick={transferValue}>Add new booking</button>
      </form>
    </div>
  );
};
export default NewBookings;