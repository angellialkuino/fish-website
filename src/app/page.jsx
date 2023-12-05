import React from "react";
import AddForm from "./components/AddForm";
import CardsContainer from "./components/CardsContainer";
import { getAllFishes } from "../lib/crudUtils";

const page = async () => {
  const fishes = await getAllFishes();

  return (
    <div>
      <AddForm />
      <CardsContainer data={fishes} />
    </div>
  );
};

export default page;
