import React from "react";

export default function CustomerProfile({ id }) {
  return id ? (
    <article className="customerProfile">
      Customer: {id} PROFILE WILL RENDER IN HERE !!!
    </article>
  ) : null;
}
