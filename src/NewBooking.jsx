import React, {useState} from "react";

const NewBooking = () => {

const [name, setName] = useState("");
// const [surname, setName] = useState("");
// const [email, setName] = useState("");
// const [title, setName] = useState("");
// const [roomId, setName] = useState("");
// const [checkInDate, setName] = useState("");
// const [checkOutDate, setName] = useState("");
const changeName = (event) => {
  setName(event.target.value);
};
   const transferValue = (event) => {
     event.preventDefault();
     const val = {
       name,
     };
     props.func(val);
     clearState();
   };

   const clearState = () => {
     setName("");
   };

  return (
    <div>
      <form>
        <label>
          Enter your name:
          <input type="text" name="name" value={name} onChange={changeName}  />
        </label>
        <label>
          Enter your surname:
          <input type="text" name="surname" />
          {/* value={surname} */}
        </label>
        <label>
          Enter your email:
          <input type="text" name="email" />
          {/* value={email} */}
        </label>
        <label>
          Enter your title:
          <input type="text" name="title" />
          {/* value={title} */}
        </label>
        <label>
          your room id:
          <input type="text" name="roomId" />
          {/* value={roomId} */}
        </label>
        <label>
          Check in date:
          <input type="text" name="check-in-date" />
          {/* value={checkInDate} */}
        </label>
        <label>
          Check out date:
          <input type="text" name="check-out-date" />
          {/* value={checkOutDate} */}
        </label>
        <button onClick={transferValue}>Add new booking</button>
      </form>
    </div>
  );
};

export default NewBooking;

