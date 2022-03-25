import * as fs from "fs";
import { Prisma } from "@prisma/client";
import * as path from "path";

export const createRankData = (): Prisma.RankCreateManyInput[] => {
  let rankData: Prisma.RankCreateManyInput[] = [];
  const seedFilePath = path.join(__dirname, "./data/rank.txt");
  const seedFile = fs.readFileSync(seedFilePath, "utf8");
  let counter = 1;
  const lines = seedFile.split("\n");
  lines.forEach((line) => {
    rankData.push({
      rank: counter,
      experience: BigInt(line),
    });
    counter++;
  });
  return rankData;
};
