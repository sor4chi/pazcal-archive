import styles from "styles/components/calculator.module.scss";

type Props = {
  id: string;
  label: string;
  placeholder: string;
  setValue: (value: number) => void;
};

const Rank = ({ id, label, placeholder, setValue }: Props) => {
  return (
    <div className={styles.input_container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Rank;
