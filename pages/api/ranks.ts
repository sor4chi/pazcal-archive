// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { prisma, Rank } from "lib/prisma";

type RankResponse = {
  rank: number;
  experience: string;
  stamina: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res.statusCode = 200;
  const rowRanks = await prisma.rank.findMany()
  const resRanks: RankResponse[] = [];
  rowRanks.forEach((rank: Rank) => {
    resRanks.push({
      rank: rank.rank,
      experience: rank.experience.toString(),
      stamina: Math.floor(rank.rank / 2) + 17,
    });
  });
  res.json(resRanks);
}
