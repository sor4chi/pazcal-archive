import Link from "next/link";

import styles from "styles/components/card.module.scss";
import { ResponsedNews } from "types/news";

type Props = {
  news: ResponsedNews;
};

const NewsCard = ({ news }: Props) => {
  return (
    <Link href={"/news/" + news.id}>
      <a className={styles.card}>{news.content}</a>
    </Link>
  );
};

export default NewsCard;
