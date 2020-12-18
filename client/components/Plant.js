import React, { useEffect, useState } from "react";
import defaultImage from "../assets/images/leaf.jpg";
import PlantForm from "./PlantForm";


const Plant = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  // const [plantName, setPlantName] = useState("");

  // useEffect(() => {
  //   if (props.name) setPlantName(props.name);
  // }, []);

  // const editPlant = (id, plant) => {
  //     props.handleEdit(id, {...plant});
  //     setToggleEdit(false)
  // };

  return (
    <div className='plant-box'>
      <header style={{padding: '1em 1em'}}>
        <p>Plant Name: {props.name}</p>
      </header>
      <section className="plant-img-cont">
        <img src={props.image || defaultImage} className="plant-image" />
      </section>
      <section className="plant-misc">
        <p className="plant-p">Family: {props.family}</p>
        <p className="plant-p">Genus: {props.genus}</p>
        <p className="plant-p">Year Discovered: {props.year}</p>
      </section>
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
          {toggleEdit ? "Cancel" : "Edit"}
        </button>
      </footer>
      {toggleEdit && (
        <PlantForm {...props} toggleEdit={setToggleEdit}/>  
      )}
    </div>
  );
};

export default Plant;

