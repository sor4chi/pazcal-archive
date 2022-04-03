export interface ResponsedNews {
  id: number;
  title: string;
  thumbnail: string;
  content: string;
  category: ResponsedNewsCategory;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResponsedNewsCategory {
  id: number;
  name: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}
