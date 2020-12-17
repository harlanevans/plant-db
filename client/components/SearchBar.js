import React, { useState } from "react";
import Results from './Results';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // (async () => {
    //     const response = await fetch(`https://trefle.io/api/v1/plants?token=${token}`, {mode: 'no-cors'});
    //     const json = await response.json();
    //     console.log(json);
    //   })();
    fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("received data", data);
        setSearchResults(data.data);
      })
      .catch((err) => console.log(err));
  };

  const renderSearch = () => {
    //   if (!searchResults) return null;
    return searchResults.map((plant) => (
        <Results key={plant.id} {...plant}/>
    ));
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
      <h1 style={{textAlign: 'center'}}>Search Results</h1>
      <div style={styles.searchResults}>{renderSearch()}</div>
    </div>
  );
};

export default SearchBar;

const styles = {
    searchResults: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-evenly',
    }
}
