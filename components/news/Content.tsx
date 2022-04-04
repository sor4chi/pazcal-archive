import Category from "components/atoms/Category";
import Date from "components/atoms/Date";
import styles from "styles/components/content.module.scss";
import { ResponsedNews } from "types/news";

interface Props {
  news: ResponsedNews;
}

const NewsContent = ({ news }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <Category category={news.category} />
        <h1 className={styles.title}>{news.title}</h1>
        <Date date={news.updatedAt} />
      </div>
      <hr />
      <p className={styles.content}>
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
        {news.content}
      </p>
    </div>
  );
};

export default NewsContent;
