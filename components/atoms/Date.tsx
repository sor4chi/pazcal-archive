import styles from "styles/components/atoms.module.scss";
import { formatDate } from "utils/format/date";

interface Props {
  date: Date;
}

const NewsCard = ({ date }: Props) => {
  return <span className={styles.time}>{formatDate(new Date(date))}</span>;
};

export default NewsCard;
