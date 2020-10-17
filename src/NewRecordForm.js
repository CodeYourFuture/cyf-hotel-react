import React from "react";
import { useForm } from "react-hook-form";

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
        <table id="newR">
          {HotelBookingsForm.map(item => {
            return (
              <th>
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
              </th>
            );
          })}
          <tr> </tr>
        </table>
        <input type="submit" value="ADD" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default NewRecordForm;
