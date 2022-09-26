/*
  Warnings:

  - You are about to drop the `favoritos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `favoritos` DROP FOREIGN KEY `Favoritos_client_id_fkey`;

-- DropTable
DROP TABLE `favoritos`;

-- CreateTable
CREATE TABLE `Favorites` (
    `id` VARCHAR(191) NOT NULL,
    `game_id` VARCHAR(191) NOT NULL,
    `client_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Favorites_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Favorites` ADD CONSTRAINT `Favorites_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
