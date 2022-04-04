export const changeColorStrength = (
  hexColor: string,
  type: "Light" | "Dark",
  percent: number,
): string => {
  hexColor = hexColor.replace(/^\s*#|\s*$/g, "");

  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  const perseDecimalToHex = (dec: number): string => {
    const bias = type === "Light" ? 1 : -1;
    return (0 | ((1 << 8) + dec + (bias * (256 - dec) * percent) / 100))
      .toString(16)
      .slice(1);
  };

  return (
    "#" + perseDecimalToHex(r) + perseDecimalToHex(g) + perseDecimalToHex(b)
  );
};
