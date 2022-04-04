import { GetStaticProps, GetStaticPaths } from "next";
import { NextPage } from "next";

import Navigation from "components/navigations/Index";
import NewsContent from "components/news/Content";
import { ResponsedNews } from "types/news";
import { fetchNews, fetchNewsById } from "utils/api/news";

export const getStaticPaths: GetStaticPaths = async () => {
  const res: ResponsedNews[] = await fetchNews();
  const paths: string[] = [];
  res.map((news: ResponsedNews) => paths.push(`/news/${news.id}`));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const news: ResponsedNews = await fetchNewsById(Number(params?.id));
  return { props: { news } };
};

interface Props {
  news: ResponsedNews;
}

const NewsDetail: NextPage<Props> = ({ news }: Props) => {
  return (
    <div>
      <Navigation />
      <NewsContent news={news} />
    </div>
  );
};

export default NewsDetail;
