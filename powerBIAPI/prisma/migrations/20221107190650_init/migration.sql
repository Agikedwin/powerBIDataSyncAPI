/*
  Warnings:

  - You are about to drop the `DepressionScreening` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `DepressionScreening`;

-- CreateTable
CREATE TABLE `etl_depression_screening` (
    `id_auto` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NULL,
    `provider` INTEGER NULL,
    `patient_id` INTEGER NOT NULL,
    `visit_id` INTEGER NULL,
    `visit_date` DATE NOT NULL,
    `location_id` INTEGER NULL,
    `encounter_id` INTEGER NULL,
    `PHQ_9_rating` VARCHAR(191) NULL,
    `date_created` DATE NULL,
    `date_last_modified` DATE NULL,
    `voided` INTEGER NULL,

    PRIMARY KEY (`id_auto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
