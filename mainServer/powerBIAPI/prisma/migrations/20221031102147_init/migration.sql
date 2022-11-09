/*
  Warnings:

  - The primary key for the `ETLHtsTest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ETLHtsTest` table. All the data in the column will be lost.
  - The primary key for the `EtlPatientProgram` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `EtlPatientProgram` table. All the data in the column will be lost.
  - The primary key for the `etl_ART_preparation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `etl_ART_preparation` table. All the data in the column will be lost.
  - The primary key for the `etl_allergy_chronic_illness` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `etl_allergy_chronic_illness` table. All the data in the column will be lost.
  - The primary key for the `etl_ccc_defaulter_tracing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `etl_ccc_defaulter_tracing` table. All the data in the column will be lost.
  - The primary key for the `etl_cervical_cancer_screening` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `etl_cervical_cancer_screening` table. All the data in the column will be lost.
  - The primary key for the `etl_client_enrollment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `etl_client_enrollment` table. All the data in the column will be lost.
  - The primary key for the `etl_client_trace` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `etl_client_trace` table. All the data in the column will be lost.
  - The primary key for the `etl_clinical_visit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `etl_clinical_visit` table. All the data in the column will be lost.
  - The primary key for the `etl_contact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `etl_contact` table. All the data in the column will be lost.
  - The primary key for the `etl_contacts_linked` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_auto` on the `etl_contacts_linked` table. All the data in the column will be lost.
  - The primary key for the `etl_covid19_assessment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_auto` on the `etl_covid19_assessment` table. All the data in the column will be lost.
  - Made the column `patient_id` on table `etl_ART_preparation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `provider` on table `etl_allergy_chronic_illness` required. This step will fail if there are existing NULL values in that column.
  - Made the column `provider` on table `etl_ccc_defaulter_tracing` required. This step will fail if there are existing NULL values in that column.
  - Made the column `patient_id` on table `etl_cervical_cancer_screening` required. This step will fail if there are existing NULL values in that column.
  - Made the column `client_id` on table `etl_client_enrollment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `client_id` on table `etl_client_trace` required. This step will fail if there are existing NULL values in that column.
  - Made the column `client_id` on table `etl_clinical_visit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `client_id` on table `etl_contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `patient_id` on table `etl_contacts_linked` required. This step will fail if there are existing NULL values in that column.
  - Made the column `patient_id` on table `etl_covid19_assessment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `ETLHtsTest` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`visit_id`);

-- AlterTable
ALTER TABLE `EtlPatientProgram` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `location_id` INTEGER NULL,
    MODIFY `program` VARCHAR(191) NULL,
    MODIFY `date_enrolled` VARCHAR(191) NULL,
    MODIFY `date_completed` VARCHAR(191) NULL,
    MODIFY `outcome` VARCHAR(191) NULL,
    MODIFY `date_created` VARCHAR(191) NULL,
    MODIFY `date_last_modified` VARCHAR(191) NULL,
    MODIFY `voided` VARCHAR(191) NULL,
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD PRIMARY KEY (`patient_id`);

-- AlterTable
ALTER TABLE `etl_ART_preparation` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `patient_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`patient_id`);

-- AlterTable
ALTER TABLE `etl_adverse_events` MODIFY `uuid` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `etl_allergy_chronic_illness` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `provider` INTEGER NOT NULL,
    ADD PRIMARY KEY (`patient_id`);

-- AlterTable
ALTER TABLE `etl_ccc_defaulter_tracing` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `provider` INTEGER NOT NULL,
    ADD PRIMARY KEY (`provider`);

-- AlterTable
ALTER TABLE `etl_cervical_cancer_screening` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `patient_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`patient_id`);

-- AlterTable
ALTER TABLE `etl_client_enrollment` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `client_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`client_id`);

-- AlterTable
ALTER TABLE `etl_client_trace` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `client_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`client_id`);

-- AlterTable
ALTER TABLE `etl_clinical_visit` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `client_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`client_id`);

-- AlterTable
ALTER TABLE `etl_contact` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `client_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`client_id`);

-- AlterTable
ALTER TABLE `etl_contacts_linked` DROP PRIMARY KEY,
    DROP COLUMN `id_auto`,
    MODIFY `patient_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`patient_id`);

-- AlterTable
ALTER TABLE `etl_covid19_assessment` DROP PRIMARY KEY,
    DROP COLUMN `id_auto`,
    MODIFY `patient_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`patient_id`);
