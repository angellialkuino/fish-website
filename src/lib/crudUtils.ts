import { prisma } from "./prisma";

export const getAllFishes = async () => {
  try {
    const fishes = await prisma.fish.findMany();
    return fishes;
  } catch (error) {
    return { error };
  }
};

export const getIndividualFish = async (fishId) => {
  try {
    const fish = await prisma.fish.findFirst({
      where: {
        id: fishId,
      },
    });
    return fish;
  } catch (error) {
    return { error };
  }
};

export const updateFish = async (id, updatedData) => {
  try {
    const updatedFish = await prisma.fish.update({
      where: {
        id: id,
      },
      data: updatedData,
    });
    return updatedFish;
  } catch (error) {
    return { error };
  }
};

export const createFish = async (newFishData) => {
  try {
    const newFish = await prisma.fish.create({
      data: newFishData,
    });
    return newFish;
  } catch (error) {
    return { error };
  }
};

export const deleteFish = async (id) => {
  try {
    const deletedFish = await prisma.fish.delete({
      where: {
        id: id,
      },
    });
    return deletedFish;
  } catch (error) {
    return { error };
  }
};

export const searchFish = async (searchCriteria) => {
  try {
    const foundFishes = await prisma.fish.findMany({
      where: {
        name: {
          contains: searchCriteria,
        },
      },
    });
    return foundFishes;
  } catch (error) {
    return { error };
  }
};
