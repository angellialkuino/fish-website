"use client";

import { useState } from "react";
import { updateFishAction } from "./_actions";
import Image from "next/image";

const UpdateForm = ({ fish }) => {
  const [name, setName] = useState(fish.name);
  const [fishClass, setFishClass] = useState(fish.class);
  const [species, setSpecies] = useState(fish.species);
  const [description, setDescription] = useState(fish.description);
  const [photoLink, setPhotoLink] = useState(fish.photoLink);

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
      await updateFishAction(fish.id, data);
      console.log("Successful");
    } catch (error) {
      console.error("Error updating fish:", error);
    }
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div className="w-52 h-52 relative">
        <Image
          src={fish.photoLink}
          alt={`${fish.name}'s Photo`}
          draggable={false}
          fill
        />
      </div>
      <input
        value={name}
        onChange={(e) => handleOnChange(e, setName)}
      />
      <input
        value={fishClass}
        onChange={(e) => handleOnChange(e, setFishClass)}
      />
      <input
        value={species}
        onChange={(e) => handleOnChange(e, setSpecies)}
      />
      <input
        value={description}
        onChange={(e) => handleOnChange(e, setDescription)}
      />
      <input
        value={photoLink}
        onChange={(e) => handleOnChange(e, setPhotoLink)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
