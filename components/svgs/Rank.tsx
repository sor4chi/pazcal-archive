import { NextPage } from "next";
import styles from "styles/components/svg.module.scss";

interface Props {
  isActive: boolean;
}

const RankSvg: NextPage<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      className={props.isActive ? styles.active : styles.inactive}
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
          <rect height="1.5" width="5" x="6.25" y="7.72" />
          <rect height="1.5" width="5" x="13" y="15.75" />
          <rect height="1.5" width="5" x="13" y="13.25" />
          <polygon points="8,18 9.5,18 9.5,16 11.5,16 11.5,14.5 9.5,14.5 9.5,12.5 8,12.5 8,14.5 6,14.5 6,16 8,16" />
          <polygon points="14.09,10.95 15.5,9.54 16.91,10.95 17.97,9.89 16.56,8.47 17.97,7.06 16.91,6 15.5,7.41 14.09,6 13.03,7.06 14.44,8.47 13.03,9.89" />
        </g>
      </g>
    </svg>
  );
};

export default RankSvg;
