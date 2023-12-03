import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const fish = await prisma.fish.create({
    data: {
      name: "Sample Fish",
      class: "Sample Class",
      species: "Sample Species",
      description: "This is a sample fish.",
      photoLink: "https://i.ibb.co/CQDMvGk/403729215-1377626086494735-5552912037879827652-n.jpg",
    },
  });

  console.log({ fish });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
