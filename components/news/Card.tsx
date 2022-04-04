import Image from "next/image";
import Link from "next/link";

import Category from "components/atoms/Category";
import Date from "components/atoms/Date";
import styles from "styles/components/card.module.scss";
import { ResponsedNews } from "types/news";

interface Props {
  news: ResponsedNews;
}

const NewsCard = ({ news }: Props) => {
  return (
    <Link href={`/news/${news.id}`}>
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
          <div className={styles.meta}>
            <Category category={news.category} />
            <Date date={news.updatedAt} />
          </div>
          <h1 className={styles.title}>{news.title}</h1>
          <p className={styles.description}>{news.content}</p>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard;
