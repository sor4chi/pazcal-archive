import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

import Navigation from "components/navigations/Index";
import NewsCard from "components/news/Card";
import { fetchNews } from "lib/api/news";
import { ResponsedNews } from "types/news";

type Props = {
  newsList: ResponsedNews[];
};

export const getStaticProps: GetStaticProps = async () => {
  const newsList = await fetchNews();
  return { props: { newsList }, revalidate: 60 };
};

const Home: NextPage<Props> = ({
  newsList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Navigation />
      {newsList.map((news: ResponsedNews) => (
        <NewsCard news={news} key={news.id} />
      ))}
    </div>
  );
};

export default Home;
