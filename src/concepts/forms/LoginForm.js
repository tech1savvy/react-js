import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the page from reloading

    if (!username || !password) {
      setError("Both fields are required!");
      return;
    }

    if (username === "user") {
      if (password === "1234") {
        setIsLoggedIn(true);
        setError("");
      } else {
        setError("Incorrect password. Please try again.");
      }
    } else {
      setError("User does not exist. Please check the username.");
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Login</button>
        </form>
      ) : (
        <h2>Welcome, {username}!</h2>
      )}
    </div>
  );
};

export default LoginForm;
