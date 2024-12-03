import React, { useState } from "react";

const SearchFilterApp = () => {
  // Sample data to be filtered
  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Mango",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered data based on search query
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px", width: "300px" }}
      />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredData.length === 0 ? (
          <li>No results found</li>
        ) : (
          filteredData.map((item, index) => (
            <li key={index} style={{ padding: "5px 0" }}>
              {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchFilterApp;
