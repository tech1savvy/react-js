import React, { useState, useEffect } from 'react';

function DataFetcher() {
  // State to store the data and loading state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data after the component mounts
  useEffect(() => {
    // Fetch data from an API (example: JSONPlaceholder)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(result => {
        setData(result);  // Set the fetched data
        setLoading(false);  // Update loading state to false
      })
      .catch(error => {
        setError(error);  // If error occurs, set the error state
        setLoading(false);  // Update loading state to false
      });
  }, []); // Empty dependency array means this effect runs only once after the first render

  // Render loading, data, or error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.slice(0, 5).map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
