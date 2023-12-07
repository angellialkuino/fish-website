import { getIndividualFish } from "../../../lib/crudUtils";
import SidePart from "../../components/SidePart";
import FishUpdate from "../../components/FishUpdate";

const page = async ({ params }) => {
  const { fishId } = params;

  //   const fish = await getIndividualFish(fishId);

  //   if (!fish) {
  //     return <div>Fish not found</div>;
  //   }

  const fish = {
    id: 1,
    name: "African Coelocanth",
    class: "Sarcopterygii",
    species: "chalumnae",
    description:
      "The African coelacanth belongs to an ancient lineage of bony, lobe-finned fish. The species was believed to have gone extinct over 65 million years ago but was rediscovered off the coast of South Africa in 1938. ",
    photoLink:
      "https://firebasestorage.googleapis.com/v0/b/t2023it2-keepsakes.appspot.com/o/item%20images%2Fadobo_flakes.png?alt=media&token=af425051-0081-4602-9bcb-9d0fe61d398c",
  };

  return (
    <div>
      <div className="h-screen w-full bg-blue flex">
        <SidePart description={"Update a fish entry\nto the database!"} />
        <div className="py-16 px-44 w-2/3">
          <FishUpdate fish={fish} />
        </div>
      </div>
    </div>
  );
};

export default page;
