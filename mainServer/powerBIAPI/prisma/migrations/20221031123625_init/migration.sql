/*
  Warnings:

  - The primary key for the `etl_adverse_events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `etl_adverse_events` table. All the data in the column will be lost.
  - Made the column `provider` on table `etl_adverse_events` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `etl_adverse_events` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `provider` INTEGER NOT NULL,
    ADD PRIMARY KEY (`provider`);
