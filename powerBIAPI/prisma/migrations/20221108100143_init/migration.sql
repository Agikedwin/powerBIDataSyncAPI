/*
  Warnings:

  - You are about to drop the `DrugEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DrugOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `DrugEvent`;

-- DropTable
DROP TABLE `DrugOrder`;

-- CreateTable
CREATE TABLE `etl_drug_event` (
    `id_auto` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NULL,
    `patient_id` INTEGER NULL,
    `date_started` DATE NULL,
    `visit_date` DATE NULL,
    `provider` INTEGER NULL,
    `encounter_id` INTEGER NULL,
    `program` VARCHAR(191) NULL,
    `regimen` VARCHAR(191) NULL,
    `regimen_name` VARCHAR(191) NULL,
    `regimen_line` VARCHAR(191) NULL,
    `discontinued` INTEGER NULL,
    `regimen_discontinued` VARCHAR(191) NULL,
    `date_discontinued` DATE NULL,
    `reason_discontinued` INTEGER NULL,
    `reason_discontinued_other` VARCHAR(191) NULL,
    `date_created` DATE NULL,
    `date_last_modified` DATE NULL,
    `voided` INTEGER NULL,

    PRIMARY KEY (`id_auto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `etl_drug_order` (
    `id_auto` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NULL,
    `encounter_id` INTEGER NULL,
    `order_group_id` INTEGER NULL,
    `patient_id` INTEGER NOT NULL,
    `location_id` INTEGER NULL,
    `visit_date` DATE NULL,
    `visit_id` INTEGER NULL,
    `provider` INTEGER NULL,
    `order_id` INTEGER NULL,
    `urgency` VARCHAR(191) NULL,
    `drug_concept_id` VARCHAR(191) NULL,
    `drug_short_name` VARCHAR(191) NULL,
    `drug_name` VARCHAR(191) NULL,
    `frequency` VARCHAR(191) NULL,
    `enc_name` VARCHAR(191) NULL,
    `dose` VARCHAR(191) NULL,
    `dose_units` VARCHAR(191) NULL,
    `quantity` VARCHAR(191) NULL,
    `quantity_units` VARCHAR(191) NULL,
    `dosing_instructions` VARCHAR(191) NULL,
    `duration` INTEGER NULL,
    `duration_units` VARCHAR(191) NULL,
    `instructions` VARCHAR(191) NULL,
    `route` VARCHAR(191) NULL,
    `voided` INTEGER NULL,
    `date_voided` DATE NULL,
    `date_created` DATE NULL,
    `date_last_modified` DATE NULL,

    PRIMARY KEY (`id_auto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
