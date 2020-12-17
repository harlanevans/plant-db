import React, { useEffect, useState } from "react";

const Plant = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [plantName, setPlantName] = useState("");

  useEffect(() => {
    if (props.name) setPlantName(props.name);
  }, []);

  const editPlant = (id) => {
      props.handleEdit(id, {id: props.id, name: plantName });
      setToggleEdit(false)
  };

  return (
    <div style={styles.plantBox}>
      <header style={{padding: '1em 1em 2em'}}>
        <p>Plant Name: {props.name}</p>
      </header>
      <footer className="button-box">
        <button
          onClick={() => props.deletePlant(props._id)}
          className="box-button"
        >
          Delete
        </button>
        <button
          className="box-button"
          onClick={() => setToggleEdit(!toggleEdit)}
        >
          Edit
        </button>
      </footer>
      {toggleEdit && (
        <form onSubmit={() => editPlant(props._id)} className="form">
          <input
            placeholder="Search for Plants..."
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
            className="edit-input"
          />
          <button className="form-button" >Submit</button>
        </form>
      )}
    </div>
  );
};

export default Plant;

const styles = {
  plantBox: {
    border: "solid 1px rgb(200, 200, 200)",
    borderRadius: "3px",
    boxShadow: "2px 2px 5px grey",
    margin: ".5em",
    padding: "1em",
    backgroundColor: "white",
  },
};
