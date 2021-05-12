function Highlight(id, row) {
  for (let i = 0; i < row.length; i++) {
    if (row[i].guestId === id && row[i].activeRow === true) {
      return "highlight-row";
    } else if (row[i].guestId === id && row[i].activeRow === false) {
      return "no-highlight";
    }
  }
}

export default Highlight;
