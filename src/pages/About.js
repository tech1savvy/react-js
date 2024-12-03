import React from "react";

export default function About() {
  const queryParams = new URLSearchParams(window.location.search);
  const topic = queryParams.get("topic");

  return <p>About {topic}</p>;
}
