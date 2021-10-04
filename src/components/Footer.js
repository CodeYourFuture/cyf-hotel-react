import React from "react";
export default function Footer({ addresses }) {
  return (
    <footer>
      <ul>
        {addresses.map((address, i) => {
          return <li key={`addLine${i}`}>{address}</li>;
        })}
      </ul>
    </footer>
  );
}
//["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]
