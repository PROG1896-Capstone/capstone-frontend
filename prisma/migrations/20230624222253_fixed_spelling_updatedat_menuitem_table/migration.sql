/*
  Warnings:

  - You are about to drop the column `UpdatededAt` on the `MenuItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `MenuItem` DROP COLUMN `UpdatededAt`,
    ADD COLUMN `UpdatedAt` DATETIME(3) NULL;
