import { GRADIENT_FG } from "../../../constants/style";

interface Props {
  strongText: string;
  weakText: string;
}

export const CalculatorTitle = ({ strongText, weakText }: Props) => (
  <h1 className="text-center font-bold">
    <span className={`${GRADIENT_FG} p-2 text-4xl`}>{strongText}</span>
    <span className="text-base text-gray-600">{weakText}</span>
  </h1>
);
