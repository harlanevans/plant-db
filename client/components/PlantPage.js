import React, { useState, useEffect } from "react";
import Plant from "./Plant";
import SearchBar from './SearchBar';

const PlantPage = () => {
  const [plants, setPlants] = useState([]);
  const [newPlant, setNewPlant] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/plants/newPlant", {
      method: "POST",
      body: JSON.stringify({ newPlant }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Added Plant: ", data);
        setPlants([...plants, data]);
      })
      .then(() => setNewPlant(""))
      .catch((err) => console.log("Error in handleSubmit", err));
  };

  useEffect(() => {
    fetch("/plants")
      .then((res) => res.json())
      .then((data) => {
        console.log("Plants From DB: ", data);
        setPlants(data);
      })
        .catch((err) => console.log(err, "oopsie woopsie"));
    //   fetch('/api/v1/plants/search')
  }, []);

  const renderPlants = () => {
    return plants.map((p) => (
        <Plant key={p._id} {...p} deletePlant={deletePlant} handleEdit={editPlant}/>
    ));
  };

  const deletePlant = (id) => {
    fetch(`/plants/${id}/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    // this data comes from refetching all plants after deletion
    .then((data) => {
        console.log("Successfuly Delete Plant");
        setPlants(data);
    })
    .catch((err) => console.log("Error in deletePlant", err));
};

const editPlant = (id, plant) => {
    console.log(id)
    fetch(`/plants/${id}/editPlant`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({plant})
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const updatedPlants = plants.map(pl => {
                if (pl._id === id) return data
                return pl
            })
            setPlants(updatedPlants)
    })
    }

  if (!plants) return null;
  return (
    <div style={{ padding: "1em" }}>
      <header className="header">
        <h1>Plantopia</h1>
          </header>
          <SearchBar />
          <br />
        <form onSubmit={(e) => handleSubmit(e)}  className='form'>
          <input
            placeholder="Add New Plant..."
            value={newPlant}
                  onChange={(e) => setNewPlant(e.target.value)}
          />
          <button className='form-button'>Submit</button>
        </form>
      <section style={styles.plantsCont}>{renderPlants()}</section>
    </div>
  );
};

export default PlantPage;

const styles = {
  plantsCont: {
    display: "flex",
        flexFlow: "row wrap",
    justifyContent: 'space-evenly'
  },
};
