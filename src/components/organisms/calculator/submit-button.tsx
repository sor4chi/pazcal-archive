import { GRADIENT_BG } from "../../../constants/style";

interface Props {
  label: string;
  disabled: boolean;
  onClick: () => void;
}

export const SubmitButton = ({ label, disabled, onClick }: Props) => (
  <button
    type="button"
    className={`rounded-full px-8 py-2 text-xl font-bold text-white ${
      disabled ? "bg-gray-400 shadow-none" : `${GRADIENT_BG} shadow-lg`
    }`}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);
