import React, { useEffect, useState } from "react";

const EditForm = (props) => {
    const [name, setName] = useState('')
    const [genus, setGenus] = useState('')
    const [family, setFamily] = useState('')
    const [year, setYear] = useState('')
    // const [name, setName] = useState('')

    useEffect(() => {
        if (props._id) {
            setName(props.name)
            setGenus(props.genus)
            setFamily(props.family)
            setYear(props.year)
        }
    }, []) 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleEdit(props._id, { name, genus, family, year, image: props.image })
        props.toggleEdit()
    }

  return (
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="edit-input"
        />
        <input
          placeholder="Genus"
          value={genus}
          onChange={(e) => setGenus(e.target.value)}
          className="edit-input"
        />
        <input
          placeholder="Family"
          value={family}
          onChange={(e) => setFamily(e.target.value)}
          className="edit-input"
        />
        <input
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="edit-input"
        />
        <button className="form-button">Submit</button>
      </form>
  );
};

export default EditForm;


