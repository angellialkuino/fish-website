"use server";

import { revalidatePath } from "next/cache";
import { createFish, deleteFish, getAllFishes, getIndividualFish, updateFish } from "../../lib/crudUtils";

export const readAllFishAction = async () => {
  await getAllFishes();
  revalidatePath("/");
};

export const readIndividualFishAction = async (id) => {
  await getIndividualFish(id);
  revalidatePath("/");
};

export const createFishAction = async (data) => {
  await createFish(data);
  revalidatePath("/");
};

export const updateFishAction = async (id, data) => {
  await updateFish(id, data);
  revalidatePath("/");
};

export const deleteFishAction = async (id) => {
  await deleteFish(id);
  revalidatePath("/");
};
