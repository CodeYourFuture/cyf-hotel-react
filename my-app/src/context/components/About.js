import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function About() {
  const theme = useContext(ThemeContext);
  return (
    <div className="box" style={{ ...theme }}>
      <h2>About us</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
      </p>
    </div>
  );
}

//prevent extra rerenders with React context https://github.com/dai-shi/react-tracked
//for prevent extra rerenders with React context use redux or react-tracked or react-redux or react-redux-hooks or react-redux-context
