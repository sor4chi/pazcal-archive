import { IoIosArrowForward } from "react-icons/io";

interface Props {
  onReCalc: () => void;
}

export const ReCalcButton = ({ onReCalc }: Props) => {
  return (
    <button
      className="flex w-full items-center justify-center font-bold text-gray-500"
      onClick={() => onReCalc()}
    >
      もう一度計算する
      <IoIosArrowForward className="ml-2 inline-block" />
    </button>
  );
};
