import { IoIosArrowForward } from "react-icons/io";

import { GRADIENT_FG } from "../../../constants/style";

interface Props {
  fromRank: number;
  toRank: number;
  result: number;
}

export const CalculateResult = ({ fromRank, toRank, result }: Props) => (
  <div className="m-auto flex w-full flex-col items-center justify-center gap-4">
    <div className="flex items-center justify-center gap-4">
      <span className="text-3xl font-bold">{fromRank}</span>
      <IoIosArrowForward className="h-6 w-6 text-gray-400" />
      <span className="text-3xl font-bold">{toRank}</span>
    </div>
    <span className={`text-5xl font-bold ${GRADIENT_FG}`}>
      {result.toLocaleString()}
    </span>
  </div>
);
