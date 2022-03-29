import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

import RankCalculator from "components/calculators/Rank";
import Navigation from "components/navigations/Index";
import { fetchRanks } from "lib/api/rank";
import { ResponsedRank } from "types/rank";

type Props = {
  rank: ResponsedRank[];
};

export const getStaticProps: GetStaticProps = async () => {
  const ranks = await fetchRanks();
  return { props: { ranks }, revalidate: 60 };
};

const Home: NextPage<Props> = ({
  ranks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Navigation />
      <RankCalculator ranks={ranks} />
    </div>
  );
};

export default Home;
