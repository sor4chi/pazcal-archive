import { FaCopy, FaTwitter } from "react-icons/fa";

import { copyToClipboard, shareToTwitter } from "../../../utils/share";

interface Props {
  fromRank: number;
  toRank: number;
  result: number;
}

export const ShareResult = ({ result, fromRank, toRank }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-center text-base font-bold text-gray-500">
        結果をシェアする
      </span>
      <div className="flex flex-row items-center justify-center gap-4">
        <button
          className="flex flex-row items-center justify-center gap-2 rounded-md bg-blue-400 px-4 py-2 text-white"
          onClick={() =>
            shareToTwitter(
              `ランク ${fromRank} から ${toRank} に到達するには...\n${result.toLocaleString()} exp\nが必要です！`
            )
          }
        >
          <FaTwitter className="h-6 w-6" />
          <span>Twitter</span>
        </button>
        <button
          className="flex flex-row items-center justify-center gap-2 rounded-md bg-gray-400 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-600/50 focus:ring-offset-2"
          onClick={() => copyToClipboard(result.toString())}
        >
          <FaCopy className="h-6 w-6" />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
};
