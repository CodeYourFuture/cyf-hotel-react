import React from "react";
import "./RowBackground.css";

export const TableRows = () => {
  const [dateDiff, setDateDiff] = useState([]);
  const [rowSelection, setRowSelection] = useState(true);

  const rowSelected = () => {
    if (rowSelection === true) {
      return setRowSelection(false);
    } else if (rowSelection === false) {
      return setRowSelection(true);
    }
  };

  const calculation = () => {
    let dateIn = FakeBookings.map(val => {
      // moment(str, 'YYYY-MM-DD')
      return moment(val["checkInDate"]);
    });
    let dateOut = FakeBookings.map(val => {
      // moment(str, 'YYYY-MM-DD') bu moment metodunun default degeri, kendimiz degistiredebiliriz
      return moment(val["checkOutDate"]);
    });
    let values = [];
    for (let i = 0; i < dateIn.length; i++) {
      let difference = dateIn[i].diff(dateOut[i], "days");
      values.push(difference);
    }
    setDateDiff(values);
  };

  useEffect(() => {
    calculation();
  }, []);

  return (
    <tr onClick={rowSelected} className={rowSelection ? "changeBkg" : ""}>
      <td>{props.results[index]["title"]}</td>
      <td>{props.results[index]["firstName"]}</td>
      <td>{props.results[index]["surname"]}</td>
      <td>{props.results[index]["email"]}</td>
      <td>{props.results[index]["roomId"]}</td>
      <td>{props.results[index]["checkInDate"]}</td>
      <td>{props.results[index]["checkOutDate"]}</td>
      <td>{dateDiff[index] * -1}</td>
    </tr>
  );
};
