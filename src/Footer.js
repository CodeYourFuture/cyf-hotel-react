const location = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];
export function Footer() {
  return (
    <div className="footer">
      <ul>
        {location.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
