/*
  Warnings:

  - You are about to drop the column `code` on the `features` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `features` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "features_code_key";

-- AlterTable
ALTER TABLE "features" DROP COLUMN "code";

-- CreateIndex
CREATE UNIQUE INDEX "features_name_key" ON "features"("name");
