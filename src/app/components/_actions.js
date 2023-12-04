"use server";

import { revalidatePath } from "next/cache";
import { createFish, updateFish } from "../../lib/crudUtils";

export const createFishAction = async (data) => {
  await createFish(data);
  revalidatePath("/");
};

export const updateFishAction = async (id, data) => {
  await updateFish(id, data);
  revalidatePath("/");
};
