import Image from "next/image";
import Link from "next/link";

import styles from "styles/components/card.module.scss";
import { ResponsedNews } from "types/news";
import { formatDate } from "utils/format/date";
import { changeColorStrength } from "utils/style/colorCalculation";

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
            <span
              className={styles.category}
              style={{
                backgroundColor: news.category.color,
                borderColor: changeColorStrength(
                  news.category.color,
                  "Dark",
                  50,
                ),
              }}
            >
              {news.category.name}
            </span>
            <span className={styles.time}>
              {formatDate(new Date(news.createdAt))}
            </span>
          </div>
          <h1 className={styles.title}>{news.title}</h1>
          <p className={styles.description}>{news.content}</p>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard;
