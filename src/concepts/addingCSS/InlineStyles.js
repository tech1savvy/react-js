import React from "react";

function InlineStyleExample() {
  const divStyle = {
    color: "blue",
    fontSize: "20px",
    padding: "10px",
  };

  return <div style={divStyle}>This is an inline styled div</div>;
  // or
  /*
    return 
    <div style={{color: "blue", fontSize: "20px", padding: "10px"}}>
    This is an inline styled div
    </div>;
  */
}

export default InlineStyleExample;
