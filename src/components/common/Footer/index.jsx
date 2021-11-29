import { FaCopyright, FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import styled from "styled-components";

const Footer = ({ hotelInfo }) => {
  const icons = [
    <FaMapMarkerAlt className="icon text-danger" />,
    <FaEnvelope className="icon text-info" />,
    <FaPhoneAlt className="icon" />,
  ];

  return (
    <StyledFooter className="bg-secondary py-2 text-center text-light d-flex flex-column fs-5">
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
          <FaCopyright className="icon" />
          Copyright, 2021 &copy; All Rights Reserved.
        </div>
        <div>
          View Source on &nbsp;
          <a
            className="text-dark text-decoration-none"
            href="https://github.com/Amir-Pourhadi/CYF-React-Hotel"
            target="_blank">
            <FaGithub className="icon text-dark" />
            GitHub
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

Footer.defaultProps = {
  hotelInfo: ["NajafAbad, Isfahan, Iran", "Alex.CE1379@Gmail.com", "+98 123 456 7890"],
};

const StyledFooter = styled.footer`
  .icon {
    font-size: 1.6rem;
    margin-right: 0.5rem;
  }
`;

export default Footer;
