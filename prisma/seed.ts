import { prisma } from "lib/prisma";
import { createRankData } from "./seeds/rank";

const main = async () => {
  await prisma.rank.createMany({
    data: createRankData(),
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
