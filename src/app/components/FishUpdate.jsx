"use client";

import { React, useState } from "react";
import { updateFishAction } from "./_actions";
import Image from "next/image";

export default function FishUpdate({ fish }) {
  const [name, setName] = useState(fish.name);
  const [fishClass, setFishClass] = useState(fish.class);
  const [species, setSpecies] = useState(fish.species);
  const [description, setDescription] = useState(fish.description);
  const [photoLink, setPhotoLink] = useState(fish.photoLink);

  const handleOnChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  return (
    <div className="h-full bg-dark-blue rounded-3xl overflow-hidden flex flex-col">
      <div className="h-40 bg-white-blue relative">
        <Image
          fill
          className="object-center object-contain"
          src={fish.photoLink}
        />
      </div>

      <form className="p-10 gap-4 flex flex-col text-dark-blue font-commissioner">
        <input
          className="py-2 px-6 rounded-full bg-white-blue"
          value={photoLink}
          onChange={(e) => handleOnChange(e, setPhotoLink)}
        />
        <input
          className="py-2 px-6 rounded-full bg-white-blue"
          value={name}
          onChange={(e) => handleOnChange(e, setName)}
        />
        <input
          className="py-2 px-6 rounded-full bg-white-blue"
          value={fishClass}
          onChange={(e) => handleOnChange(e, setFishClass)}
        />
        <input
          className="py-2 px-6 rounded-full bg-white-blue"
          value={species}
          onChange={(e) => handleOnChange(e, setSpecies)}
        />
        <textarea
          rows="4"
          className="py-4 px-6 rounded-3xl bg-white-blue"
          value={description}
          onChange={(e) => handleOnChange(e, setDescription)}
        />
      </form>
    </div>
  );
}
