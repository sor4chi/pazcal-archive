import { useState } from "react";
import { z } from "zod";

import { HeaderFooterLayout } from "../components/layout/header-footer";
import { RankCalculator } from "../components/templates/rank-calculator";
import { testExps } from "../constants/exp";
import { CustomPageProps, NextPageWithLayout } from "../types/page";

const Home: NextPageWithLayout<CustomPageProps> = () => {
  const rankFormSchema = z
    .object({
      from: z
        .number()
        .min(1)
        .max(testExps.length - 2),
      to: z
        .number()
        .min(1)
        .max(testExps.length - 1),
    })
    .refine((data) => data.from < data.to, {
      message: "fromはtoより小さい値を入力してください",
      path: ["from"],
    });

  const [fromRank, setFromRank] = useState<number | null>(null);
  const [fromRankError, setFromRankError] = useState<string | null>(null);
  const [toRank, setToRank] = useState<number | null>(null);
  const [toRankError, setToRankError] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const calcExp = () => {
    try {
      const { from, to } = rankFormSchema.parse({
        from: fromRank,
        to: toRank,
      });
      const fromExp = testExps[from] || 0;
      const toExp = testExps[to] || 0;
      setResult(toExp - fromExp);
    } catch (e) {
      if (!(e instanceof z.ZodError)) return;
      e.errors.forEach((error) => {
        if (error.path[0] === "from") return setFromRankError(error.message);
        if (error.path[0] === "to") return setToRankError(error.message);
      });
    }
  };

  return (
    <>
      <RankCalculator
        result={result}
        fromRank={{
          value: fromRank,
          onChange: (value) => setFromRank(value),
          error: fromRankError,
        }}
        toRank={{
          value: toRank,
          onChange: (value) => setToRank(value),
          error: toRankError,
        }}
        onSubmit={() => calcExp()}
        isSubmitDisabled={!fromRank || !toRank || fromRank >= toRank}
        onReCalc={() => {
          setFromRank(null);
          setToRank(null);
          setResult(null);
        }}
      />
    </>
  );
};

Home.getLayout = (page) => HeaderFooterLayout(page);

Home.getInitialProps = () => ({
  title: "Home",
  description: "Home page",
  keywords: ["home", "page"],
});

export default Home;
