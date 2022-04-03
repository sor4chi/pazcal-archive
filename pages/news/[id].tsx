import { GetStaticProps, GetStaticPaths } from "next";
import { NextPage, InferGetStaticPropsType } from "next";

import Navigation from "components/navigations/Index";
import { ResponsedNews } from "types/news";
import { fetchNews } from "utils/api/news";

export const getStaticPaths: GetStaticPaths = async () => {
  const res: ResponsedNews[] = await fetchNews();
  const paths = res.map((news: ResponsedNews) => ({
    params: { id: news.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const newsList = await fetchNews();
  const news = newsList.find((news: ResponsedNews) => news.id === params.id);
  return { props: { news } };
};

const NewsDetail: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  news,
}) => {
  return (
    <div>
      <Navigation />
      <div className="wrapper"></div>
    </div>
  );
};

export default NewsDetail;
