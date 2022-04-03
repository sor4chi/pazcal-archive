-- AlterTable
ALTER TABLE "News" ADD COLUMN     "newsCategoryId" INTEGER;

-- CreateTable
CREATE TABLE "NewsCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsCategory_name_key" ON "NewsCategory"("name");

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_newsCategoryId_fkey" FOREIGN KEY ("newsCategoryId") REFERENCES "NewsCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
