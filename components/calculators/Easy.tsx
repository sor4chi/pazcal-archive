import styles from "styles/components/calculator.module.scss";
import { PersedRank } from "types/rank";
import { useState } from "react";

type Props = {
  ranks: PersedRank[];
};

const Navigation = ({ ranks }: Props) => {
  const [fromRank, setFromRank] = useState<PersedRank["rank"] | null>();
  const [toRank, setToRank] = useState<PersedRank["rank"] | null>();
  const [result, setResult] = useState<PersedRank["experience"]>(0);

  const calculate = (): void => {
    const from: PersedRank | undefined = ranks.find(
      (rank) => rank.rank === fromRank,
    );
    const to: PersedRank | undefined = ranks.find(
      (rank) => rank.rank === toRank,
    );
    if (!from || !to) {
      return;
    }
    if (from.rank > to.rank) {
      setFromRank(toRank);
      setToRank(fromRank);
      setResult(from.experience - to.experience);
    } else {
      setResult(to.experience - from.experience);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputs}>
        <div className={styles.input_container}>
          <label className={styles.label} htmlFor="fromRank">
            このランクから
          </label>
          <input
            className={styles.input}
            id="fromRank"
            type="number"
            onChange={(e) => setFromRank(Number(e.target.value))}
            placeholder={`${ranks[0].rank} ~ ${ranks[ranks.length - 1].rank}`}
          />
        </div>
        <div className={styles.input_container}>
          <label className={styles.label} htmlFor="toRank">
            このランクまで
          </label>
          <input
            className={styles.input}
            id="toRank"
            type="number"
            onChange={(e) => setToRank(Number(e.target.value))}
            placeholder={`${ranks[0].rank} ~ ${ranks[ranks.length - 1].rank}`}
          />
        </div>
      </div>
      <input
        className={styles.button}
        type="submit"
        value="計算"
        onClick={calculate}
      />
      <div className={styles.result}>{result}</div>
    </div>
  );
};

export default Navigation;
