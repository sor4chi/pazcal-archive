import { ResponsedRank, PersedRank } from "types/rank";
const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const fetchRanks = async (): Promise<PersedRank[]> => {
  const res = await fetch(`${BASE_API_URL}/ranks`);
  const rowRanks = await res.json();
  const persedRanks: PersedRank[] = [];
  rowRanks.forEach((rank: ResponsedRank) => {
    persedRanks.push({
      ...rank,
      experience: Number(rank.experience),
    });
  });
  return persedRanks;
};
