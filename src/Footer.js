const Footer = (props) => {
    return (
      <div className="footer">
      <ul className="contact-container">
        {props.contact.map((list, index) => {
          return <li key={index}>{list}</li>;
        })}
      </ul>
      </div>
    );
  };
  export default Footer 