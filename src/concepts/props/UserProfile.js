import React from "react";

const UserProfile = ({ name, age, isPremium, address }) => {
  // Destructuring the address object if it exists
  const { city, state, zip } = address || {}; // Default to empty object if address is not provided

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      <h2>User Profile</h2>

      {/* Display user name and age */}
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      {/* Conditionally render the premium badge */}
      {isPremium && (
        <span
          style={{
            backgroundColor: "gold",
            padding: "5px 10px",
            borderRadius: "5px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Premium User
        </span>
      )}

      {/* Conditionally render address if all properties exist */}
      {city && state && zip ? (
        <div
          style={{
            marginTop: "10px",
            borderTop: "1px solid #ccc",
            paddingTop: "10px",
          }}
        >
          <h3>Address</h3>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
        </div>
      ) : (
        <p style={{ color: "red" }}>Address information is incomplete.</p>
      )}
    </div>
  );
};

export default UserProfile;
