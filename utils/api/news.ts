import { ResponsedNews } from "types/news";
const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const fetchNews = async (): Promise<ResponsedNews[]> => {
  const res = await fetch(`${BASE_API_URL}/news`);
  const newsList = await res.json();
  return newsList;
};

export const fetchNewsById = async (newsId: number): Promise<ResponsedNews> => {
  console.log(`${BASE_API_URL}/news/${newsId}`);
  const res = await fetch(`${BASE_API_URL}/news/${newsId}`);
  const news = await res.json();
  return news;
};
