import { NextPage, GetStaticProps } from "next";

import Navigation from "components/navigations/Index";
import NewsCard from "components/news/Card";
import styles from "styles/pages/News.module.scss";
import { ResponsedNews } from "types/news";
import { fetchNews } from "utils/api/news";

interface Props {
  newsList: ResponsedNews[];
}

export const getStaticProps: GetStaticProps = async () => {
  const newsList = await fetchNews();
  return { props: { newsList }, revalidate: 60 };
};

const News: NextPage<Props> = ({ newsList }: Props) => {
  return (
    <div>
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.news_container}>
          {newsList.map((news: ResponsedNews) => (
            <div key={news.id}>
              <NewsCard news={news} />
              <hr className={styles.line} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
