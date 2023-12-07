import { getIndividualFish } from "../../../lib/crudUtils";
import SidePart from "../../components/SidePart";
import FishView from "../../components/FishView";

const page = async ({ params }) => {
  const { fishId } = params;

  const fish = await getIndividualFish(fishId);

  if (!fish) {
    return <div>Fish not found {fishId}</div>;
  }

  return (
    <div>
      <div className="h-screen w-full bg-blue flex">
        <SidePart description={"Learn about their\nendangered species!"} />
        <div className="py-16 px-44 w-2/3">
          <FishView fish={fish} />
        </div>
      </div>
    </div>
  );
};

export default page;
