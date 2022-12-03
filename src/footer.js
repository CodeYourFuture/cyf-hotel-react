function Footer() {
  const details = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div>
      <ul>
        {details.map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
export default Footer;
