const TableHeader = props => (
  <thead>
    <tr>
      {Object.keys(props[0]).map((header, index) => (
        <th key={index}>{header}</th>
      ))}
      <th>Number Of Nights</th>
    </tr>
  </thead>
);

export default TableHeader;
