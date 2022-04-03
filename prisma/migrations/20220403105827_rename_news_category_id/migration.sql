/*
  Warnings:

  - You are about to drop the column `newsCategoryId` on the `News` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_newsCategoryId_fkey";

-- AlterTable
ALTER TABLE "News"
RENAME COLUMN "newsCategoryId" TO "categoryId";

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "NewsCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
