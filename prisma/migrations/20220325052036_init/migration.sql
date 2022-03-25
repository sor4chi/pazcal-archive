-- CreateTable
CREATE TABLE "Rank" (
    "id" SERIAL NOT NULL,
    "rank" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rank_rank_key" ON "Rank"("rank");
