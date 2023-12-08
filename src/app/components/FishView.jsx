import React from "react";
import Image from "next/image";

export default function FishView({ fish }) {
  return (
    <div className="h-full bg-dark-blue rounded-3xl overflow-hidden flex flex-col">
      <div className="h-40 bg-white-blue relative">
        <Image
          alt={`${fish.name}'s Photo`}
          fill
          className="object-center object-contain"
          src={fish.photoLink}
        />
      </div>
      <div className="p-10 flex flex-col gap-10">
        <div>
          <p className="text-center font-wendy-one text-white-blue text-4xl">
            {fish.name}
          </p>
          <div className="flex justify-center font-commissioner text-white-blue gap-6">
            <p className="text-right font-bold">
              Class
              <br />
              Species
            </p>
            <p className="text-left">
              {fish.class}
              <br />
              {fish.species}
            </p>
          </div>
        </div>
        <div className="bg-white-blue text-dark-blue rounded-3xl p-8">
          {fish.description}
        </div>
      </div>
    </div>
  );
}
