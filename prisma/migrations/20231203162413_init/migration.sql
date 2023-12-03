/*
  Warnings:

  - Added the required column `photoLink` to the `Fish` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fish" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoLink" TEXT NOT NULL
);
INSERT INTO "new_Fish" ("class", "description", "id", "name", "species") SELECT "class", "description", "id", "name", "species" FROM "Fish";
DROP TABLE "Fish";
ALTER TABLE "new_Fish" RENAME TO "Fish";
CREATE UNIQUE INDEX "Fish_name_key" ON "Fish"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
