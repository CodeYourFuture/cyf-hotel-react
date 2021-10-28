import React, { useState } from "react";

export default function TableRow({ booking }) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };
  return (
    <tr
      onClick={toggleHighlight}
      className={isHighlighted ? "selected" : "not-selected"}
    >
      {Object.values(booking).map((bookingDetail, j) => (
        <td key={j}>{bookingDetail} </td>
      ))}
    </tr>
  );
}
