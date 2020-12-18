import React from "react";
import defaultImage from "../assets/images/leaf.jpg";

const Results = (props) => {
  if (!props) return null;
  return (
    <div className="plant-box">
      <header style={{ padding: "1em 1em" }}>
        <p>
          Plant Name:
          <span> {props.common_name || props.scientific_name}</span>
        </p>
      </header>
      <section className="plant-img-cont">
        <a
          href={`https://www.google.com/search?tbm=isch&q=${
            props.scientific_name
          }`}
          target="_blank"
        >
          <img src={props.image_url || defaultImage} className="plant-image" />
          </a>
      </section>
      <section className="plant-misc">
        <p className="plant-p">Family: {props.family}</p>
        <p className="plant-p">Genus: {props.genus}</p>
        <p className="plant-p">Year Discovered: {props.year}</p>
      </section>
      <footer className="button-box">
        <button
          onClick={() =>
            props.addPlantMiddle({
              name: props.common_name || props.scientific_name,
              family: props.family,
              genus: props.genus,
              year: props.year,
              image: props.image_url,
              _id: props.id
            })
          }
          className="box-button"
        >
          Add to Plants
        </button>
        <a
          href={`https://en.wikipedia.org/wiki/${
            props.scientific_name
          }`}
          target="_blank"
        >
          <button className="box-button">Learn More</button>
        </a>
          {/* <button className="box-button">More Images</button> */}
      </footer>
    </div>
  );
};

export default Results;
