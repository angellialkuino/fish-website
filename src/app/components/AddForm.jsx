"use client";

import { useRef, useState } from "react";
import { createFishAction } from "./_actions";

const AddForm = () => {
  const [name, setName] = useState("");
  const [fishClass, setFishClass] = useState("");
  const [species, setSpecies] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");

  const formRef = useRef(null);

  const handleOnChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      class: fishClass,
      species: species,
      description: description,
      photoLink: photoLink,
    };

    try {
      await createFishAction(data);
      formRef.current.reset();
      console.log("Successful");
    } catch (error) {
      console.error("Error adding fish:", error);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={(e) => handleOnSubmit(e)}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => handleOnChange(e, setName)}
      />
      <input
        placeholder="Class"
        value={fishClass}
        onChange={(e) => handleOnChange(e, setFishClass)}
      />
      <input
        placeholder="Species"
        value={species}
        onChange={(e) => handleOnChange(e, setSpecies)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => handleOnChange(e, setDescription)}
      />
      <input
        placeholder="Photo Link"
        value={photoLink}
        onChange={(e) => handleOnChange(e, setPhotoLink)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
