import UpdateForm from "../../components/UpdateForm";
import { getIndividualFish } from "../../../lib/crudUtils";
import Image from "next/image";

const page = async ({ params }) => {
  const { fishId } = params;

  const fish = await getIndividualFish(fishId);

  if (!fish) {
    return <div>Fish not found</div>;
  }

  return (
    <div>
      <UpdateForm fish={fish} />
    </div>
  );
};

export default page;
