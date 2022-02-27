import { Rank } from "types";
import axios from "axios";

export const RankService = {
  get: {
    AllData: async function (): Promise<Rank[]> {
      const { data } = await axios.get("/api/ranks");
      return data;
    },
  },
};
