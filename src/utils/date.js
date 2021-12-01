import moment from "moment";

const dateDiff = (start, end) => {
  start = moment(start);
  end = moment(end);
  return end.diff(start, "days");
};

export { dateDiff };
