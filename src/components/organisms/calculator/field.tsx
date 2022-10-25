export interface CalculatorFieldProps {
  value: number | null;
  label: string;
  error: string | null;
  onChange: (value: number) => void;
}

export const CalculatorField = ({
  value,
  label,
  error,
  onChange,
}: CalculatorFieldProps) => (
  <div className="relative w-full">
    <span className="absolute bottom-full left-0 p-2 text-xl text-gray-400">
      {label}
    </span>
    <input
      type="text"
      inputMode="numeric"
      pattern="\d*"
      className={`w-full rounded-md p-2 text-center text-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 ${
        error ? "ring-2 ring-red-400" : ""
      }`}
      value={value ?? ""}
      onChange={(e) =>
        /^([0-9]+|)$/.test(e.target.value) && onChange(+e.target.value)
      }
    />
    {error && (
      <span className="absolute top-full left-0 p-2 text-base text-red-400">
        {error}
      </span>
    )}
  </div>
);
