/*
  Warnings:

  - You are about to drop the column `activty` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "activty",
ADD COLUMN     "activity" "Activity";
