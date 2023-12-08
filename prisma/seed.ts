import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const defaultFishes = [
  {
    name: "Adriatic Sturgeon",
    class: "Actinopterygii",
    species: "naccarii",
    description:
      "The Adriatic sturgeon is a large, long-lived anadromous species that spawns in freshwater after a period of growth in marine habitat. It is found in the Adriatic sea and the Po River and its inflow rivers in Italy. The Adriatic sturgeon is listed as endangered throughout its range under the Endangered Species Act.",
    photoLink: "https://www.fisheries.noaa.gov/s3/styles/original/s3/dam-migration/640x427-adriatic-sturgeon.png",
  },
  {
    name: "African Coelacanth",
    class: "Sarcopterygii",
    species: "chalumnae",
    description:
      "The African coelacanth belongs to an ancient lineage of bony, lobe-finned fish. The species was believed to have gone extinct over 65 million years ago but was rediscovered off the coast of South Africa in 1938. The Tanzanian distinct population segment (DPS) is thought to represent a single, isolated population of the species, having diverged approximately 200,000 years ago. The size of the population is likely small, with no connectivity to other populations. It also has late maturity and the longest generation time of any vertebrate. The main threats to the African coelacanth Tanzanian DPS include bycatch in shark gillnet fisheries and habitat destruction due to development. In 2016, NOAA Fisheries listed the DPS as threatened under the Endangered Species Act.",
    photoLink: "https://www.fisheries.noaa.gov/s3/styles/original/s3/dam-migration/640x427-african-coelacanth.png",
  },
  {
    name: "Argentine Angelshark",
    class: "Chondrichthyes",
    species: "argentina",
    description:
      "The Argentine angelshark is a cartilaginous fish, similar to a ray or skate. It has a very restricted range in the Southwest Atlantic, from southern Brazil to at least the northern part of Argentina, one of the smallest ranges of any elasmobranch species. It is also considered to be the least common species of angelshark found in the southwestern Atlantic, particularly in Argentina. The main threat to the Argentine angelshark is bycatch in commercial fisheries operating in its core habitat for other commercially important fish. In 2017, NOAA Fisheries listed the species as endangered under the Endangered Species Act.",
    photoLink: "https://www.fisheries.noaa.gov/s3/styles/original/s3/dam-migration/640x427-argentine-angelshark.png",
  },
  {
    name: "Atlantic Sturgeon",
    class: "Actinopterygii",
    species: "oxyrinchus",
    description:
      "Atlantic sturgeon live in rivers and coastal waters from Canada to Florida. Hatched in the freshwater of rivers, Atlantic sturgeon head out to sea as sub-adults, and return to their birthplace to spawn, or lay eggs, when they reach adulthood.\nThe Atlantic sturgeon has five rows of bony plates known as scutes that run along its body and a snout with four slender, soft tissue projections called barbels in front of its mouth. In addition, the tail is like a shark’s where one side, or lobe, is larger than the other. All of these features give the fish its unique look.",
    photoLink: "https://www.fisheries.noaa.gov/s3/styles/original/s3/dam-migration/640x427-atlantic-sturgeon.png",
  },
  {
    name: "Atlantic Salmon (Protected)",
    class: "Osteichthyes",
    species: "salar",
    description:
      "Atlantic salmon, also known as the “King of Fish,” are anadromous, which means they live in both fresh and saltwater. Atlantic salmon have a complex life history that begins with spawning and juvenile rearing in rivers. They then migrate to saltwater to feed, grow, and mature before returning to freshwater to spawn.\nAtlantic salmon are vulnerable to many stressors and threats, dams and culverts that block or impede the migratory movements between freshwater spawning and rearing habitats and the marine environment, habitat degradation, foreign fisheries, and poor marine survival. They are considered an indicator species or a “canary in the coal mine.” This means that the health of the species is directly affected by its ecosystem health. When a river ecosystem is clean and well-connected, its salmon population is typically healthy and robust. When a river ecosystem is not clean or well-connected, its salmon population will usually decline.",
    photoLink: "https://www.fisheries.noaa.gov/s3/styles/original/s3/2022-08/640x427-Salmon-Atlantic-NOAAFisheries.png",
  },
];

async function main() {
  defaultFishes.map(async (fish) => {
    await prisma.fish.create({
      data: fish,
    });
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
