import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const fish1 = await prisma.fish.create({
    data: {
      name: "Sample Fish",
      class: "Sample Class",
      species: "Sample Species",
      description: "This is a sample fish.",
      photoLink: "https://i.ibb.co/CQDMvGk/403729215-1377626086494735-5552912037879827652-n.jpg",
    },
  });

  const fish2 = await prisma.fish.create({
    data: {
      name: "Sample Fish 2",
      class: "Sample Class 2",
      species: "Sample Species 2",
      description: "This is a sample fish 2.",
      photoLink: "https://i.ibb.co/52LXfbv/GRU-logo.png",
    },
  });

  console.log({ fish1, fish2 });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
