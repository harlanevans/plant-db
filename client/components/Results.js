import React from "react";

const Results = (props) => {
  if (!props) return null;
  return (
      <div style={{ padding: 0, margin: 0 , display: 'flex',}}>
      {props.common_name}
      <div style={styles.imageCont}>
        <img src={props.image_url}  style={styles.image}/>
      </div>
    </div>
  );
};

export default Results;

const styles = {
  imageCont: {
    width: "33%",
        height: "100%",
    display: 'flex'
    // flex: "1",
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    }
};
