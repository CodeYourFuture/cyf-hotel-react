import React from "react";
import { useForm } from "react-hook-form";
import Bookings from "./Bookings";
import SearchResults from "./SearchResults";

const HotelBookingsForm = [
  `id`,
  `title`,
  `firstName`,
  `surname`,
  `email`,
  `roomId`,
  `checkInDate`,
  `checkOutDate`
];

const NewRecordForm = ({ bookingRecord }) => {
  const onSubmit = data => {
    console.log(data);
    bookingRecord(data);
  };

  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          {HotelBookingsForm.map(item => {
            return (
              <tr>
                <td>
                  {" "}
                  <label>{item}</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder={"Enter " + item}
                    name={item}
                    ref={register}
                    required
                  />
                </td>
              </tr>
            );
          })}
          <tr>
            {" "}
            <input type="submit" />
          </tr>
        </table>
      </form>
    </div>
  );
};

export default NewRecordForm;
