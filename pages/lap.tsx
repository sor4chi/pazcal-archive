import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

import LapCalculator from "components/calculators/Lap";
import Navigation from "components/navigations/Index";
import { ResponsedRank } from "types/rank";
import { fetchRanks } from "utils/api/rank";

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
      <LapCalculator ranks={ranks} />
    </div>
  );
};

export default Home;
