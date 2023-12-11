"use client";

import { React, useState, useRef } from "react";
import { createFishAction } from "./_actions";
import { useRouter } from "next/navigation";

export default function FishUpdate() {
  const [name, setName] = useState("");
  const [fishClass, setFishClass] = useState("");
  const [species, setSpecies] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");

  const formRef = useRef(null);
  const router = useRouter();

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
      alert("New Fish Created Successfully");
      router.push("/");
    } catch (error) {
      console.error("Error adding fish:", error);
    }
  };

  return (
    <div className="h-full bg-dark-blue rounded-3xl overflow-hidden flex flex-col">
      <form
        id="fish-form"
        data-testid="fish-form1"
        ref={formRef}
        onSubmit={(e) => handleOnSubmit(e)}
        className="p-10 gap-4 flex flex-col text-dark-blue font-commissioner"
      >
        <input
          className="py-2 px-6 rounded-full bg-white-blue placeholder-blue"
          placeholder="Photo Link"
          value={photoLink}
          onChange={(e) => handleOnChange(e, setPhotoLink)}
        />
        <input
          className="py-2 px-6 rounded-full bg-white-blue placeholder-blue"
          placeholder="Name"
          value={name}
          onChange={(e) => handleOnChange(e, setName)}
        />
        <input
          className="py-2 px-6 rounded-full bg-white-blue placeholder-blue"
          placeholder="Class"
          value={fishClass}
          onChange={(e) => handleOnChange(e, setFishClass)}
        />
        <input
          className="py-2 px-6 rounded-full bg-white-blue placeholder-blue"
          placeholder="Species"
          value={species}
          onChange={(e) => handleOnChange(e, setSpecies)}
        />
        <textarea
          rows="4"
          className="py-4 px-6 rounded-3xl bg-white-blue placeholder-blue"
          placeholder="Description"
          value={description}
          onChange={(e) => handleOnChange(e, setDescription)}
        />
      </form>
    </div>
  );
}
