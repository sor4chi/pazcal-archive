import {
  SHARE_TWITTER_BASE_URL,
  SHARE_TWITTER_TEXT_TEMPLATE,
} from "./../constants/twitter";

export const copyToClipboard = (text: string) => {
  if (navigator.clipboard == undefined && window.clipboardData) {
    window.clipboardData.setData("Text", text);
  } else {
    navigator.clipboard.writeText(text);
  }
};

export const shareToTwitter = (text: string) => {
  const encodedText = encodeURIComponent(SHARE_TWITTER_TEXT_TEMPLATE(text));
  const url = `${SHARE_TWITTER_BASE_URL}?text=${encodedText}`;
  window.open(url, "_blank");
};
