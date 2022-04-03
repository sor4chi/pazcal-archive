import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { id } = req.query;
  res.statusCode = 200;
  const news = await prisma.news.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      category: true,
    },
  });
  res.json(news);
}
