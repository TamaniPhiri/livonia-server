/*
  Warnings:

  - The `quantity` column on the `Inventory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `quantity` column on the `Transactions` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "quantity",
ADD COLUMN     "quantity" INTEGER;

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "quantity",
ADD COLUMN     "quantity" INTEGER;
