-- CreateEnum
CREATE TYPE "Activity" AS ENUM ('sedentary', 'light', 'moderate', 'active', 'very_active');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "activty" "Activity"[];
