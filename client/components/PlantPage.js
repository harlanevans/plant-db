import React, { useState, useEffect } from "react";

const PlantPage = () => {
    const [plants, setPlants] = useState([]);
    const [newPlant, setNewPlant] = useState("");
  
    const handleSubmit = () => {
        
    }



    return(
        <div>

        <h1>Plantopia</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search for Plants..."
            value={newPlant}
            onChange={(e) => setNewPlant(e.target.value)}
            />
          <button>Submit</button>
        </form>
            </div>
    )
}

export default PlantPage