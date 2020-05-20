import react, { timeline, timeout } from "react";

const Nights = props => {
  let to_data = new Date(props.timeout);
  let form_date = new Date(props.timeline);
  let difference =
    form_date > to_data ? form_date - to_data : to_data - form_date;
  let diff_days = Math.floor(difference / (1000 * 3600 * 24));
  return diff_days;
};
export default Nights;
