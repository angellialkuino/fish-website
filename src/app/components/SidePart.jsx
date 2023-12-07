import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFishFins, FaCheck } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

export default function SidePart({ description, form }) {
  return (
    <div className="h-screen w-1/3 relative">
      <Image
        src="/round_side2.png"
        fill
        className="object-cover object-right absolute z-10"
      />
      <div className="h-full w-full absolute z-20 flex flex-col">
        <div className="absolute z-30 w-full pt-10 pl-10 flex justify-between ">
          <Link
            href="/"
            className="text-6xl rotate-180 text-blue hover:text-dark-blue"
          >
            <FaFishFins />
          </Link>
          {form ? (
            <button
              form="fish-form"
              type="submit"
              className="bg-white-blue hover:bg-dark-blue text-blue hover:text-white-blue h-16 w-16 rounded-full flex justify-center items-center text-4xl"
            >
              <FaCheck />
            </button>
          ) : (
            <Link
              href="/create"
              className="bg-white-blue hover:bg-dark-blue text-blue hover:text-white-blue h-16 w-16 rounded-full flex justify-center items-center text-7xl"
            >
              <IoIosAdd />
            </Link>
          )}
        </div>
        <div className="absolute flex flex-col justify-center text-center h-full w-full">
          <h1 className="font-wendy-one text-9xl text-blue">Fish</h1>
          <h4 className="font-commissioner text-xl text-blue whitespace-pre-line">
            {description}
          </h4>
        </div>
      </div>
    </div>
  );
}
