import Link from "next/link";

import TwitterSvg from "components/svgs/Twitter";
import styles from "styles/components/calculator.module.scss";

interface RequiredSet {
  experiencePerHour: number;
  experience: number;
  time: number;
  lap: number;
  stamina: number;
  stone: number;
  money: number;
  gyudon: number;
}

interface Props {
  required: RequiredSet;
  isFirst: boolean;
}

const Result = ({ required, isFirst }: Props) => {
  const messages = [
    { message: "時速", value: required.experiencePerHour, unit: "exp" },
    { message: "必要経験値", value: required.experience, unit: "exp" },
    { message: "必要スタミナ", value: required.stamina, unit: "" },
    { message: "必要金額", value: required.money, unit: "円" },
    { message: "必要周回数", value: required.lap, unit: "周" },
    { message: "必要魔法石", value: required.stone, unit: "個" },
    { message: "必要時間", value: required.time, unit: "時間" },
    { message: "吉野家の牛丼", value: required.gyudon, unit: "杯" },
  ];

  let twitterShareUrl = `http://twitter.com/intent/tweet?original_referer=pazcal.net&url=pazcal.net&text=`;
  twitterShareUrl += "ここを周回すると...%0a";
  messages.forEach((message) => {
    twitterShareUrl += `${message.message}: ${Math.round(
      message.value,
    ).toLocaleString()} ${message.unit}%0a`;
  });
  twitterShareUrl += `&hashtags=pazcal`;

  return (
    <div className={isFirst ? styles.hide : styles.show}>
      <table className={styles.result_table} id="result">
        <tbody>
          {messages.map((message, index) => (
            <tr className={styles.result_table_row} key={index}>
              <td className={styles.result_table_message}>{message.message}</td>
              <td className={styles.result_table_value}>
                {Math.round(message.value)}
              </td>
              <td className={styles.result_table_unit}>{message.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href={twitterShareUrl}>
        <a className={styles.twitter_share}>
          <TwitterSvg color="#ffffff" />
          <div className={styles.twitter_share_text}>TwitterでShareする</div>
        </a>
      </Link>
    </div>
  );
};

export default Result;
