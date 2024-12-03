import React from "react";

export default function Home() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");

  return <p>Welcome {name}</p>;
}
