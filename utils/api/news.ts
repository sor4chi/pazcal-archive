import { ResponsedNews } from "types/news";
const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const fetchNews = async (): Promise<ResponsedNews[]> => {
  const res = await fetch(`${BASE_API_URL}/news`);
  const news = await res.json();
  return news;
};
