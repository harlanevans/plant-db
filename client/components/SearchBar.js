import React, { useState } from "react";
// import fetch from "node-fetch";
const token = "xtx6IVJ7HxQT59FY_Qxqo5dpo7zziGQKP4ErjCQYjZQ";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://trefle.io/api/v1/plants/search?q=${query}&limit=1&token=${token}`,
      {
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("ERROR IN SEARCH SUBMISSION", err));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <input
          placeholder="Search for Plants..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
