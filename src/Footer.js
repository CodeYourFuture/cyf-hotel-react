export default function Footer({ contactDetails }) {
  return (
    <div className="footer">
      <ul>
        {contactDetails.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
