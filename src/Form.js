import { useState } from "react";

export default function Form({ setRefreshMessages }) {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.target);

    // const newData = {
    //   from: formData.get("from"),
    //   text: formData.get("text"),
    // };
    // console.log("handleSubmit newData:", newData);
    //http://localhost:4000/bookings
    try {
      setIsSubmitting(true);

      const response = await fetch("http://localhost:4000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(formData),
      });
      console.log("handleSubmit response:", response);

      const json = await response.json();
      console.log("handleSubmit json:", json);

      event.target.reset();

      setRefreshMessages((prevRefreshMessages) => !prevRefreshMessages);
    } catch (error) {
      console.log("handleSubmit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="div-for-form">
      <form className="form-conrainer" onSubmit={handleSubmit}>
        <div className="form-fild">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-fild">
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-fild">
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-fild">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-fild">
          <label>Room Id:</label>
          <input
            type="text"
            name="roomId"
            value={formData.roomId}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-fild">
          <label>CheckInDate:</label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-fild">
          <label>CheckOutDate:</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
