import { useState } from "react";
import { FaCopy, FaTwitter } from "react-icons/fa";

import { copyToClipboard, shareToTwitter } from "../../../utils/share";

interface Props {
  fromRank: number;
  toRank: number;
  result: number;
}

export const ShareResult = ({ result, fromRank, toRank }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (isCopied) return;
    copyToClipboard(result.toString());
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-center text-sm font-bold text-gray-500">
        結果をシェアする
      </span>
      <div className="flex flex-row items-center justify-center gap-4">
        <button
          className="flex flex-row items-center justify-center gap-2 rounded-md bg-blue-400 px-4 py-2 text-white transition-all duration-500 ease-in-out hover:bg-blue-500"
          onClick={() =>
            shareToTwitter(
              `ランク ${fromRank} から ${toRank} に到達するには...\n${result.toLocaleString()} exp\n必要です`
            )
          }
        >
          <FaTwitter className="h-6 w-6" />
          <span>Twitter</span>
        </button>
        <button
          className={`flex flex-row items-center justify-center gap-2 rounded-md px-4 py-2 text-white transition-all duration-500 ease-in-out ${
            isCopied
              ? "pointer-events-none bg-gray-600"
              : "bg-gray-400 hover:bg-gray-500"
          }`}
          onClick={() => handleCopy()}
        >
          <FaCopy className="h-6 w-6" />
          <span>{isCopied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
};
