import { getAllFishes } from "@/lib/crudUtils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const fishes = await getAllFishes();

  return (
    <>
      {fishes.map((fish) => (
        <Link
          key={fish.id}
          href={`/fishes/${fish.id}`}>
          <div className="bg-blue-500 w-fit">
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
          </div>
        </Link>
      ))}
    </>
  );
}
