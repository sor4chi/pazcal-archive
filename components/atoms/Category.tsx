import styles from "styles/components/atoms.module.scss";
import { ResponsedNewsCategory } from "types/news";
import { changeColorStrength } from "utils/style/colorCalculation";

interface Props {
  category: ResponsedNewsCategory;
}

const NewsCard = ({ category }: Props) => {
  return (
    <span
      className={styles.category}
      style={{
        backgroundColor: category.color,
        borderColor: changeColorStrength(category.color, "Dark", 50),
      }}
    >
      {category.name}
    </span>
  );
};

export default NewsCard;
