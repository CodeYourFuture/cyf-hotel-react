import { FaCopyright, FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = ({ hotelInfo }) => {
  const icons = [<FaMapMarkerAlt />, <FaEnvelope />, <FaPhoneAlt />];

  return (
    <footer className="bg-secondary py-2 text-center text-light d-flex flex-column fs-5">
      <ul className="list-inline d-flex justify-content-around m-0">
        {hotelInfo.map((info, index) => (
          <li key={index}>
            {icons[index]}
            {info}
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-around">
        <div>
          <FaCopyright />
          Copyright, 2021 &copy; All Rights Reserved.
        </div>
        <div>
          View Source on <FaGithub />
          <a className="text-warning" href="https://github.com/Amir-Pourhadi/CYF-React-Hotel" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  hotelInfo: ["Najaf Abad, Isfahan, Iran", "Alex.CE1379@Gmail.com", "+98 937 010 4798"],
};

export default Footer;
