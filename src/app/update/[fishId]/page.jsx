import { getIndividualFish } from "../../../lib/crudUtils";
import SidePart from "../../components/SidePart";
import FishUpdate from "../../components/FishUpdate";

const page = async ({ params }) => {
  const { fishId } = params;

  const fish = await getIndividualFish(fishId);

  if (!fish) {
    return <div>Fish not found</div>;
  }

  return (
    <div>
      <div className="h-screen w-full bg-blue flex">
        <SidePart description={"Update a fish entry\nto the database!"} form />
        <div className="py-16 px-44 w-2/3">
          <FishUpdate fish={fish} />
        </div>
      </div>
    </div>
  );
};

export default page;
