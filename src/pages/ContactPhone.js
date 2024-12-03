import React from "react";

export default function Contact() {
  const queryParams = new URLSearchParams(window.location.search);
  const method = queryParams.get("method");

  return <p>Contact by {method}</p>;
}
