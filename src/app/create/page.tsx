import SidePart from "../components/SidePart";
import FishCreate from "../components/FishCreate";

const page = async () => {

  return (
    <div>
      <div className="h-screen w-full bg-blue flex">
        <SidePart description={"Create a new fish entry\nin the database!"} />
        <div className="py-16 px-44 w-2/3">
          <FishCreate />
        </div>
      </div>
    </div>
  );
};

export default page;
