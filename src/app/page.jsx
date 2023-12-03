import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

export default async function Home() {
  let fishes = await prisma.fish.findMany();

  return (
    <>
      {fishes.map((fish, index) => {
        return (
          <div key={index}>
            {fish.name}
            {fish.class}
            {fish.species}
            {fish.description}
            <Image
              src={fish.photoLink ? fish.photoLink : "/fish.png"}
              alt="photo fish"
              width={"100"}
              height={"100"}
            />
          </div>
        );
      })}
    </>
  );
}
