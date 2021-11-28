const Footer = ({ hotelInfo }) => {
  return (
    <footer className="bg-secondary py-2 text-center">
      <ul className="list-inline text-light">
        {hotelInfo.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
        <li>
          View Source on{" "}
          <a className="text-warning" href="https://github.com/Amir-Pourhadi/CYF-React-Hotel" target="_blank">
            GitHub
          </a>
        </li>
        <li>Copyright, 2021 &copy; All Rights Reserved.</li>
      </ul>
    </footer>
  );
};

Footer.defaultProps = {
  hotelInfo: ["Najaf Abad, Isfahan, Iran", "Alex.CE1379@Gmail.com", "+98 937 010 4798"],
};

export default Footer;
