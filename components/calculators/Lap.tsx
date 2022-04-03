import { useState } from "react";
import { Link as Scroll } from "react-scroll";

import InputBox from "./InputBox";
import Result from "./Result";

import styles from "styles/components/calculator.module.scss";
import { PersedRank } from "types/rank";

interface Props {
  ranks: PersedRank[];
}

const Lap = ({ ranks }: Props) => {
  const [timePerLap, setTimePerLap] = useState<number>(0);
  const [experiencePerLap, setExperiencePerLap] = useState<number>(0);
  const [staminaPerLap, setStaminaPerLap] = useState<number>(0);
  const [fromRank, setFromRank] = useState<PersedRank["rank"] | null>();
  const [toRank, setToRank] = useState<PersedRank["rank"] | null>();
  const [isFirst, setIsFirst] = useState<boolean>(true);

  const [required, setRequired] = useState({
    experiencePerHour: 0,
    experience: 0,
    time: 0,
    lap: 0,
    stamina: 0,
    stone: 0,
    money: 0,
    gyudon: 0,
  });

  const calculate = (): void => {
    const from: PersedRank | undefined = ranks.find(
      (rank) => rank.rank === fromRank,
    );
    const to: PersedRank | undefined = ranks.find(
      (rank) => rank.rank === toRank,
    );
    if (!from || !to || !timePerLap || !experiencePerLap || !staminaPerLap) {
      return;
    }
    let experience = 0;
    if (from.rank > to.rank) {
      setFromRank(toRank);
      setToRank(fromRank);
      experience = from.experience - to.experience;
    } else {
      experience = to.experience - from.experience;
    }
    const experiencePerHour = (experience / timePerLap) * 60;
    const time = experience / experiencePerLap / 60;
    const lap = time / (timePerLap / 60);
    const stamina = lap * staminaPerLap;
    const stone = lap / (to.stamina / staminaPerLap);
    const money = (5020 / 85 / (to.stamina / staminaPerLap)) * lap;
    const gyudon = money / 350;

    setRequired({
      experiencePerHour,
      experience,
      time,
      lap,
      stamina,
      stone,
      money,
      gyudon,
    });
    setIsFirst(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <InputBox
          id="experiencePerLap"
          label="一周の経験値"
          placeholder="半角"
          setValue={setExperiencePerLap}
        />
        <InputBox
          id="timePerLap"
          label="一周にかかる時間"
          placeholder="半角(分)"
          setValue={setTimePerLap}
        />
        <InputBox
          id="staminaPerLap"
          label="一周にかかるスタミナ"
          placeholder="半角"
          setValue={setStaminaPerLap}
        />
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
      <Scroll
        to="result"
        smooth={true}
        className={styles.button}
        type="submit"
        onClick={calculate}
      >
        計算
      </Scroll>

      <Result required={required} isFirst={isFirst} />
    </div>
  );
};

export default Lap;
