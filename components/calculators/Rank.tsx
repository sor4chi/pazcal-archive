import Link from "next/link";
import { useState } from "react";

import InputBox from "./InputBox";

import TwitterSvg from "components/svgs/Twitter";
import styles from "styles/components/calculator.module.scss";
import { PersedRank } from "types/rank";

interface Props {
  ranks: PersedRank[];
}

const Rank = ({ ranks }: Props) => {
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [fromRank, setFromRank] = useState<PersedRank["rank"] | null>();
  const [toRank, setToRank] = useState<PersedRank["rank"] | null>();
  const [result, setResult] = useState<PersedRank["experience"]>(0);
  const [twitterShareUrl, setTwitterShareUrl] = useState<string>("/");

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
    setTwitterShareUrl(
      `http://twitter.com/intent/tweet?original_referer=pazcal.net&url=pazcal.net&text=${
        from.rank
      }から${
        to.rank
      }までの必要経験値は...%0a${result.toLocaleString()} expです！%0a&hashtags=pazcal`,
    );
    setIsFirst(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <InputBox
          id="fromRank"
          label="このランクから"
          placeholder={`${ranks[0].rank} ~ ${ranks[ranks.length - 1].rank}`}
          setValue={setFromRank}
        />
        <InputBox
          id="toRank"
          label="このランクまで"
          placeholder={`${ranks[0].rank} ~ ${ranks[ranks.length - 1].rank}`}
          setValue={setToRank}
        />
      </div>
      <input
        className={styles.button}
        type="submit"
        value="計算"
        onClick={calculate}
      />
      <div className={isFirst ? styles.hide : styles.show}>
        <div className={styles.rank_message}>
          {toRank}から{fromRank}までにかかる経験値は...
        </div>
        <div className={styles.rank_result}>{result}</div>
        <Link href={twitterShareUrl}>
          <a className={styles.twitter_share}>
            <TwitterSvg color="#ffffff" />
            <div className={styles.twitter_share_text}>TwitterでShareする</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Rank;
