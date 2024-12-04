import React, { useState } from "react";
import axios from "axios";

const HttpMethodsExample = () => {
  // State to store fetched data, new data for POST, update data for PUT, and delete ID
  const [data, setData] = useState(null);
  const [newData, setNewData] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [deleteId, setDeleteId] = useState("");

  // Base API URL (example API for demonstration)
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  // Fetch data using the Fetch API (GET request)
  const fetchDataWithFetch = async () => {
    try {
      // Fetch data from the API
      const response = await fetch(API_URL);
      // Parse the JSON response
      const result = await response.json();
      // Update state with fetched data
      setData(result);
    } catch (error) {
      console.error("Error fetching data with Fetch:", error);
    }
  };

  // Fetch data using Axios (GET request)
  const fetchDataWithAxios = async () => {
    try {
      // Make a GET request using Axios
      const response = await axios.get(API_URL);
      // Update state with fetched data
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data with Axios:", error);
    }
  };

  // Post data using Fetch API (POST request)
  const postDataWithFetch = async () => {
    try {
      // Send a POST request with new data
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        // Stringify the new data to be sent
        body: JSON.stringify({
          title: newData,
          body: "This is a new post",
          userId: 1,
        }),
      });
      // Parse the response and add the new post at the start of the data
      const result = await response.json();
      setData((prevData) => [result, ...prevData]);
    } catch (error) {
      console.error("Error posting data with Fetch:", error);
    }
  };

  // Post data using Axios (POST request)
  const postDataWithAxios = async () => {
    try {
      // Send a POST request using Axios with new data
      const response = await axios.post(API_URL, {
        title: newData,
        body: "This is a new post",
        userId: 1,
      });
      // Update state with the newly created post
      setData((prevData) => [response.data, ...prevData]);
    } catch (error) {
      console.error("Error posting data with Axios:", error);
    }
  };

  // Update data using Fetch API (PUT request)
  const updateDataWithFetch = async () => {
    try {
      // Send a PUT request to update an existing post (we'll update the post with ID 1)
      const response = await fetch(`${API_URL}/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        // Stringify the updated data to be sent
        body: JSON.stringify({
          id: 1,
          title: updateData,
          body: "Updated post body",
          userId: 1,
        }),
      });
      // Parse the response and update the post in state
      const result = await response.json();
      // Replace the old post with the updated post in the data
      setData((prevData) =>
        prevData.map((post) => (post.id === result.id ? result : post))
      );
    } catch (error) {
      console.error("Error updating data with Fetch:", error);
    }
  };

  // Update data using Axios (PUT request)
  const updateDataWithAxios = async () => {
    try {
      // Send a PUT request using Axios to update an existing post (post with ID 1)
      const response = await axios.put(`${API_URL}/1`, {
        id: 1,
        title: updateData,
        body: "Updated post body",
        userId: 1,
      });
      // Update state by replacing the old post with the updated post
      setData((prevData) =>
        prevData.map((post) =>
          post.id === response.data.id ? response.data : post
        )
      );
    } catch (error) {
      console.error("Error updating data with Axios:", error);
    }
  };

  // Delete data using Fetch API (DELETE request)
  const deleteDataWithFetch = async () => {
    try {
      // Send a DELETE request to remove a post by ID
      const response = await fetch(`${API_URL}/${deleteId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // If successful, filter out the deleted post from the state
        setData((prevData) =>
          prevData.filter((post) => post.id !== parseInt(deleteId))
        );
      }
    } catch (error) {
      console.error("Error deleting data with Fetch:", error);
    }
  };

  // Delete data using Axios (DELETE request)
  const deleteDataWithAxios = async () => {
    try {
      // Send a DELETE request using Axios
      const response = await axios.delete(`${API_URL}/${deleteId}`);
      if (response.status === 200) {
        // If successful, filter out the deleted post from the state
        setData((prevData) =>
          prevData.filter((post) => post.id !== parseInt(deleteId))
        );
      }
    } catch (error) {
      console.error("Error deleting data with Axios:", error);
    }
  };

  return (
    <div>
      <h1>HTTP Methods in React (Fetch & Axios)</h1>

      {/* Data Fetching */}
      <div>
        <button onClick={fetchDataWithFetch}>Fetch Data with Fetch</button>
        <button onClick={fetchDataWithAxios}>Fetch Data with Axios</button>
      </div>

      {/* Post Data */}
      <div>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          placeholder="Enter title for new post"
        />
        <button onClick={postDataWithFetch}>Post Data with Fetch</button>
        <button onClick={postDataWithAxios}>Post Data with Axios</button>
      </div>

      {/* Update Data */}
      <div>
        <input
          type="text"
          value={updateData}
          onChange={(e) => setUpdateData(e.target.value)}
          placeholder="Enter title for updated post"
        />
        <button onClick={updateDataWithFetch}>Update Data with Fetch</button>
        <button onClick={updateDataWithAxios}>Update Data with Axios</button>
      </div>

      {/* Delete Data */}
      <div>
        <input
          type="number"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          placeholder="Enter post ID to delete"
        />
        <button onClick={deleteDataWithFetch}>Delete Data with Fetch</button>
        <button onClick={deleteDataWithAxios}>Delete Data with Axios</button>
      </div>

      {/* Display Data */}
      <div>
        <h3>Data:</h3>
        <ul>
          {data ? (
            data.map((post) => (
              <li key={post.id}>
                {post.title} - {post.body}
              </li>
            ))
          ) : (
            <p>No data to display</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HttpMethodsExample;
