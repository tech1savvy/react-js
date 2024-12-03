import React from "react";
import UserProfile from "./UserProfile";

const user = {
  name: "John Doe",
  age: 30,
  isPremium: true,
  address: {
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

const incompleteUser = {
  name: "Jane Smith",
  age: 25,
  isPremium: false,
  address: {
    city: "Los Angeles",
    state: "",
  },
};

function UserProfileApp() {
  return (
    <div>
      {/* Pass complete user data */}
      <UserProfile {...user} />

      {/* Pass incomplete user data */}
      <UserProfile {...incompleteUser} />
    </div>
  );
}

export default UserProfileApp;
