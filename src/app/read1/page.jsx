import React from "react";

import SidePart from "../components/SidePart";
import FishCard from "../components/FishCard";

const fish = {
  id: 1,
  name: "African Coelocanth",
  class: "Sarcopterygii",
  species: "chalumnae",
  description:
    "The African coelacanth belongs to an ancient lineage of bony, lobe-finned fish. The species was believed to have gone extinct over 65 million years ago but was rediscovered off the coast of South Africa in 1938. ",
  photoLink:
    "https://firebasestorage.googleapis.com/v0/b/t2023it2-keepsakes.appspot.com/o/item%20images%2Fadobo_flakes.png?alt=media&token=af425051-0081-4602-9bcb-9d0fe61d398c",
};

export default function page() {
  return (
    <div className="h-screen w-full bg-blue flex">
      <SidePart description={"Learn about their\nendangered species"} />
      <div className="flex-grow py-16 px-28 flex flex-col gap-4 overflow-auto">
        <FishCard fish={fish} />
        <FishCard fish={fish} />
        <FishCard fish={fish} />
        <FishCard fish={fish} />
      </div>
    </div>
  );
}
