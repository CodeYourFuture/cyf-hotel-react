export const List = ({ array }) => {
  return (
    <ul className="footer-ul">
      {array.map(item => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};
