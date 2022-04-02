import Image from "next/image";
import Link from "next/link";

import styles from "styles/components/card.module.scss";
import { ResponsedNews } from "types/news";

type Props = {
  news: ResponsedNews;
};

const NewsCard = ({ news }: Props) => {
  console.log(news.thumbnail);
  return (
    <Link href={"/news/" + news.id}>
      <a className={styles.card}>
        <div className={styles.image}>
          <Image
            src={news.thumbnail}
            layout="fill"
            objectFit="cover"
            alt={news.title}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{news.title}</h1>
          <p className={styles.description}>
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
      </a>
    </Link>
  );
};

export default NewsCard;
