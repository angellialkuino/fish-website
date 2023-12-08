import React from "react";
import SidePart from "./components/SidePart";
import FishCard from "./components/FishCard";
import { getAllFishes } from "../lib/crudUtils";

const Home = async () => {
  const fishes = await getAllFishes();

  return (
    <div className="h-screen w-full bg-blue flex">
      <SidePart description={"Learn about their\nendangered species!"} />
      <div className="flex-grow py-16 px-28 flex flex-col gap-4 overflow-auto">
        {fishes && fishes.map((fish) => <FishCard fish={fish} />)}
      </div>
    </div>
  );
};

export default Home;
