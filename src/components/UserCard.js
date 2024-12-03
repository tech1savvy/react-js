import React, { useState } from "react";

// UserCard Component
const UserCard = ({ name, age, location }) => {
  // Optional state: toggle for showing additional info
  const [showMore, setShowMore] = useState(false);

  // Toggle the 'showMore' state
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>

      {/* Optional button to toggle more info */}
      <button onClick={toggleShowMore}>
        {showMore ? "Show Less" : "Show More"}
      </button>

      {/* Displaying more information if 'showMore' is true */}
      {showMore && <p>This is additional info about {name}.</p>}
    </div>
  );
};

export default UserCard;
