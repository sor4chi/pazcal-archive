import { IoIosArrowDown } from "react-icons/io";

import { CalculatorField } from "../organisms/calculator/field";
import { CalculateResult } from "../organisms/calculator/result";
import { ShareResult } from "../organisms/calculator/share-result";
import { SubmitButton } from "../organisms/calculator/submit-button";
import { CalculatorTitle } from "../organisms/calculator/title";
import { ExperienceGraph } from "../organisms/rank/experience-graph";

interface Props {
  result: number | null;
  fromRank: {
    value: number | null;
    error: string | null;
    onChange: (value: number) => void;
  };
  toRank: {
    value: number | null;
    error: string | null;
    onChange: (value: number) => void;
  };
  isSubmitDisabled: boolean;
  onSubmit: () => void;
}

export const RankCalculator = ({
  result,
  fromRank,
  toRank,
  isSubmitDisabled,
  onSubmit,
}: Props) => {
  const Content =
    result && fromRank.value && toRank.value ? (
      <>
        <div className="my-16 flex w-full flex-col items-center justify-center gap-8">
          <CalculateResult
            result={result}
            fromRank={fromRank.value}
            toRank={toRank.value}
          />
          <ExperienceGraph range={{ from: fromRank.value, to: toRank.value }} />
          <ShareResult
            result={result}
            fromRank={fromRank.value}
            toRank={toRank.value}
          />
        </div>
      </>
    ) : (
      <>
        <CalculatorTitle strongText="ランク間経験値" weakText="計算機" />
        <div className="my-16 flex w-full flex-col items-center justify-center gap-8">
          <CalculatorField
            value={fromRank.value}
            onChange={fromRank.onChange}
            error={fromRank.error}
            label="from"
          />
          <IoIosArrowDown className="h-12 w-12 text-gray-400" />
          <CalculatorField
            value={toRank.value}
            onChange={toRank.onChange}
            error={toRank.error}
            label="to (> from)"
          />
        </div>
        <SubmitButton
          label="計算"
          disabled={isSubmitDisabled}
          onClick={() => onSubmit()}
        />
      </>
    );

  return (
    <div className="m-auto flex w-full max-w-3xl flex-col items-center justify-center p-8">
      {Content}
    </div>
  );
};
