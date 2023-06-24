/*
  Warnings:

  - You are about to alter the column `Price` on the `MenuItem` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.

*/
-- AlterTable
ALTER TABLE `MenuItem` MODIFY `Price` DECIMAL(65, 2) NOT NULL;
