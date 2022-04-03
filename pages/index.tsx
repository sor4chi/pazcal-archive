import { NextPage, GetStaticProps } from "next";

import RankCalculator from "components/calculators/Rank";
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

const Home: NextPage<Props> = ({ ranks }: Props) => {
  return (
    <div>
      <Navigation />
      <RankCalculator ranks={ranks} />
    </div>
  );
};

export default Home;
