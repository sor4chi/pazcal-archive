import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Navigation from "components/navigations/Index";
import EasyCalculator from "components/calculators/Easy";
import { ResponsedRank } from "types/rank";
import { fetchRanks } from "lib/api/rank";

type Props = {
  rank: ResponsedRank[];
};

export const getStaticProps: GetStaticProps = async () => {
  const ranks = await fetchRanks();
  return { props: { ranks }, revalidate: 1 };
};

const Home: NextPage<Props> = ({
  ranks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Navigation />
      <EasyCalculator ranks={ranks} />
    </div>
  );
};

export default Home;
