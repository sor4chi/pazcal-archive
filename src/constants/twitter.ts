import { clientEnv } from "../env/schema.mjs";

export const TWITTER_HASHTAGS = "#ぱずかる";
export const SHARE_TWITTER_BASE_URL = "https://twitter.com/intent/tweet";
const SUFFIX = `\n\n${TWITTER_HASHTAGS}\n${clientEnv.NEXT_PUBLIC_BASE_URL}`;
export const SHARE_TWITTER_TEXT_TEMPLATE = (text: string) => `${text}${SUFFIX}`;
