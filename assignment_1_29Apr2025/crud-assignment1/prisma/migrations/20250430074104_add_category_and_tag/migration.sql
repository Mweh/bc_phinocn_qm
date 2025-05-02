/*
  Warnings:

  - You are about to drop the `_CategoryToContact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToContact" DROP CONSTRAINT "_CategoryToContact_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToContact" DROP CONSTRAINT "_CategoryToContact_B_fkey";

-- DropTable
DROP TABLE "_CategoryToContact";

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContactTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ContactTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ContactCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ContactCategory_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ContactTag_B_index" ON "_ContactTag"("B");

-- CreateIndex
CREATE INDEX "_ContactCategory_B_index" ON "_ContactCategory"("B");

-- AddForeignKey
ALTER TABLE "_ContactTag" ADD CONSTRAINT "_ContactTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactTag" ADD CONSTRAINT "_ContactTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactCategory" ADD CONSTRAINT "_ContactCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactCategory" ADD CONSTRAINT "_ContactCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
