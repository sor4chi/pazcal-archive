import { NextPage, GetStaticProps } from "next";

import LapCalculator from "components/calculators/Lap";
import Navigation from "components/navigations/Index";
import { PersedRank } from "types/rank";
import { fetchRanks } from "utils/api/rank";

interface Props {
  ranks: PersedRank[];
}

export const getStaticProps: GetStaticProps = async () => {
  const ranks = await fetchRanks();
  return { props: { ranks }, revalidate: 60 };
};

const Lap: NextPage<Props> = ({ ranks }: Props) => {
  return (
    <div>
      <Navigation />
      <LapCalculator ranks={ranks} />
    </div>
  );
};

export default Lap;
