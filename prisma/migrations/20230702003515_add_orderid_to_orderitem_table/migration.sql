/*
  Warnings:

  - Added the required column `OrderId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `OrderItem` ADD COLUMN `OrderId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_OrderId_fkey` FOREIGN KEY (`OrderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
