import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

import Navigation from "components/navigations/Index";
import NewsCard from "components/news/Card";
import styles from "styles/pages/News.module.scss";
import { ResponsedNews } from "types/news";
import { fetchNews } from "utils/api/news";

type Props = {
  newsList: ResponsedNews[];
};

export const getStaticProps: GetStaticProps = async () => {
  const newsList = await fetchNews();
  for (let i = 0; i < 3; i++) {
    newsList.push(...newsList);
  }
  return { props: { newsList }, revalidate: 60 };
};

const Home: NextPage<Props> = ({
  newsList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.news_container}>
          {newsList.map((news: ResponsedNews) => (
            <>
              <NewsCard news={news} key={news.id} />
              <hr className={styles.line} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
