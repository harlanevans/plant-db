import React, { useState } from "react";
import Results from "./Results";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [toggleError, setToggleError] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(false);
    setSearchResults([]);
    fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("received data", data);
        if (data.length < 1) {
          setToggleError(true);
        } else {
          setSearchResults(data.data);
          setSearched(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const addPlantMiddle = (plant) => {
    // invoke from results page
    props.addPlant(plant);
    console.log(searchResults);
    const filteredSearch = searchResults.filter((p) => {
      console.log(p.id, plant._id);
      if (p.id !== plant._id) return p;
    });
    console.log(filteredSearch);
    setSearchResults(filteredSearch);
    if (filteredSearch.length < 1) {
      setSearched(false);
      setQuery("");
    }
    // filter against the rest of the search results and return a new array with the one that
    // was successfuly added removed from search results
  };

  const renderSearch = () => {
    //   if (!searchResults) return null;
    return searchResults.map((plant) => (
      <Results
        key={plant.id}
        {...plant}
        addPlantMiddle={addPlantMiddle}
        setSearched={setSearched}
      />
    ));
  };

  const checkInput = (value) => {
    if (value === "") {
      setSearchResults([]);
      setSearched(false);
      setToggleError(false);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <input
          placeholder="Search for Plants..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            checkInput(e.target.value);
          }}
          autoFocus
        />
        <button className="form-button">Submit</button>
      </form>
      {toggleError ? (
        <div>
          <p className="search-error">
            No Search Results Found With That Query
          </p>
          <p className="search-error">Please Try Again</p>
        </div>
      ) : (
        <div>
          {searched && <h1 style={{ textAlign: "center" }}>Search Results</h1>}
          <div style={styles.searchResults}>{renderSearch()}</div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

const styles = {
  searchResults: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-evenly",
  },
};
