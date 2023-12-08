"use client";

import React from "react";
import { deleteFishAction } from "./_actions";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

export default function FishCard({ fish }) {
  const handleOnClickDelete = async (id) => {
    try {
      await deleteFishAction(id);
      console.log(`Successfully deleted ${id}`);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="bg-dark-blue text-white-blue rounded-full overflow-hidden flex flex-row min-h-[12rem]">
      <div className="py-8 flex-grow flex flex-col justify-center items-center font-commssioner font-bold text-3xl">
        {fish.name}
        <div className="pt-4 flex flex-row gap-4">
          <Link
            className="bg-white-blue text-dark-blue hover:text-blue h-12 w-12 rounded-full flex justify-center items-center"
            href={`/fishes/${fish.id}`}>
            <FaSearch />
          </Link>
          <Link
            className="bg-white-blue text-dark-blue hover:text-blue h-12 w-12 rounded-full flex justify-center items-center"
            href={`/update/${fish.id}`}>
            <FaPen />
          </Link>
          <button
            className="bg-white-blue text-dark-blue hover:text-blue h-12 w-12 rounded-full flex justify-center items-center"
            onClick={() => handleOnClickDelete(fish.id)}>
            <FaTrash />
          </button>
        </div>
      </div>
      <div className="relative h-48 w-48 rounded-full bg-white-blue overflow-hidden">
        <Image
          alt={`${fish.name}'s Photo`}
          className="object-contain object-center w-100 h-100"
          src={fish.photoLink}
          draggable={false}
          fill
        />
      </div>
    </div>
  );
}
