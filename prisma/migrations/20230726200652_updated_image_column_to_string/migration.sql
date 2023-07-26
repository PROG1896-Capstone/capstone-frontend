/*
  Warnings:

  - You are about to alter the column `image` on the `MenuItem` table. The data in that column could be lost. The data in that column will be cast from `Blob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `MenuItem` MODIFY `image` VARCHAR(191) NOT NULL;
