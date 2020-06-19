import react from "react";
import moment from "moment";

const Nights = props => {
  let to_data = moment(props.timeout);
  let form_date = moment(props.timeline);
  let diff_days = to_data.diff(form_date, "days");
  return diff_days;
};
export default Nights;
