/*
  Warnings:

  - The primary key for the `etl_adverse_events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `etl_adverse_events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `etl_adverse_events` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `uuid` VARCHAR(191) NULL,
    MODIFY `mfl_code` INTEGER NULL,
    ADD PRIMARY KEY (`patient_id`);
