import { getAllFishes } from "../lib/crudUtils";
import Image from "next/image";
import Link from "next/link";
import AddForm from "./components/AddForm";

export default async function Home() {
  const fishes = await getAllFishes();

  return (
    <>
      <AddForm />
      {fishes.map((fish) => (
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
        </div>
      ))}
    </>
  );
}
