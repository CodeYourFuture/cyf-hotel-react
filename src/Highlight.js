function Highlight(index, row) {
  if (row.results[index] === row.activeRow) {
    return "highlight-row";
  } else {
    return "no-highlight";
  }
}

export default Highlight;
