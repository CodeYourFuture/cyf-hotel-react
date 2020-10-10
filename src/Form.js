import React from "react";

function createNumberArray(start, end) {
  let arr = [];
  for (let i = start; i <= end; ++i) {
    arr.push(i);
  }
  return arr;
}

function Form() {
  return (
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="input"
          class="form-control"
          id="title"
          placeholder="Enter your title"
        />
      </div>
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="input"
          class="form-control"
          id="firstName"
          placeholder="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="surname">Surname</label>
        <input
          type="input"
          class="form-control"
          id="surname"
          placeholder="Enter your surname"
        />
      </div>
      <div class="form-group">
        <label for="roomId">Room ID</label>
        <select id="roomId">
          {createNumberArray(1, 9).map(opt => (
            <option>{opt}</option>
          ))}
        </select>
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default Form;
