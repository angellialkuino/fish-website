"use client";

import Image from "next/image";
import Link from "next/link";
import { deleteFishAction } from "./_actions";

const CardsContainer = ({ data }) => {
  const handleOnClickDelete = async (id) => {
    try {
      await deleteFishAction(id);
      console.log(`Successfully deleted ${id}`);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      {data &&
        data.map((fish) => (
          <div
            key={fish.id}
            className="bg-blue-500 w-fit">
            <Link href={`/fishes/${fish.id}`}>
              <h1>{fish.name}</h1>
              <p>{fish.class}</p>
              <p>{fish.species}</p>
              <p>{fish.description}</p>
              <Image
                src={fish.photoLink ? fish.photoLink : "/fish.png"}
                alt="photo fish"
                width={100}
                height={100}
              />
            </Link>
            <button
              onClick={() => handleOnClickDelete(fish.id)}
              className="bg-red-500">
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CardsContainer;
