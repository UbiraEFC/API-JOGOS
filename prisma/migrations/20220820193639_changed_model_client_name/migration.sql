/*
  Warnings:

  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `favorites` DROP FOREIGN KEY `Favorites_client_id_fkey`;

-- DropTable
DROP TABLE `client`;

-- CreateTable
CREATE TABLE `Clients` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Clients_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Favorites` ADD CONSTRAINT `Favorites_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
