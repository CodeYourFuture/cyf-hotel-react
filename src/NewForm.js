import React from "react";
//import { useForm } from "react-hook-form";

const HotelBookingForm = [
  "id",
  "title",
  "firstName",
  "lastName",
  "email",
  "roomId",
  "checkIn",
  "checkOut"
];

const NewForm = ({ bookingRecord }) => {
  // const onSubmit = data => {
  //     axios
  //     .post("https://cyf-hotel-1.glitch.me/bookings", data)
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  //     bookingRecord(data);
  // };

  // const { register, handleSubmit } = useForm();

  return (
    <div>
      <form>
        <table id="newrecord">
          {HotelBookingForm.map(item => {
            return (
              <>
                <th>
                  <td>
                    {" "}
                    <label>{item}</label>
                  </td>
                </th>
                <tbody>
                  <tr>
                    <td>
                      <input
                        name={item}
                        type="text"
                        placeholder={"Enter " + item}
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
        <input type="submit" value="ADD" className="btn" />
      </form>
    </div>
  );
};

export default NewForm;
