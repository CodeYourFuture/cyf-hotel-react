export const List = ({ item }) => {
  return (
    <ul className="list">
      {item.map(listItem => {
        return <li key={listItem}>{listItem}</li>;
      })}
    </ul>
  );
};
