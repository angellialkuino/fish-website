import { getIndividualFish } from "@/lib/crudUtils";
import Image from "next/image";

const page = async ({ params }) => {
  const { fishId } = params;

  const fish = await getIndividualFish(fishId);

  if (!fish) {
    return <div>Fish not found</div>;
  }

  return (
    <div>
      <form className="flex flex-col justify-center items-center">
        <Image
          src={fish.photoLink}
          alt={fish.name}
          width={200}
          height={200}
        />
        <input placeholder={fish.name} />
        <input placeholder={fish.class} />
        <input placeholder={fish.species} />
        <input placeholder={fish.photoLink} />
        <input placeholder={fish.description} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
