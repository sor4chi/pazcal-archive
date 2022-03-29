import { NextPage } from "next";

import styles from "styles/components/svg.module.scss";

interface Props {
  isActive: boolean;
}

const InformationSvg: NextPage<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      className={props.isActive ? styles.active : styles.inactive}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
    </svg>
  );
};

export default InformationSvg;
