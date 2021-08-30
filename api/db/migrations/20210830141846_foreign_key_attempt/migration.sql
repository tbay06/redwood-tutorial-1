-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drug" (
    "id" TEXT NOT NULL,
    "medicinalIngredient" TEXT,
    "brandName" TEXT,
    "routeOfAdmin" TEXT,
    "strengthPerUnit" TEXT,
    "humanOrVet" TEXT,
    "therapeuticClass" TEXT,
    "dosageForm" TEXT,
    "din" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patent" (
    "id" SERIAL NOT NULL,
    "drugId" TEXT NOT NULL,
    "patentNum" TEXT NOT NULL,
    "filingDate" TIMESTAMP(3),
    "dateGranted" TIMESTAMP(3),
    "expirationDate" TIMESTAMP(3),
    "companyName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Patent" ADD FOREIGN KEY ("drugId") REFERENCES "Drug"("id") ON DELETE CASCADE ON UPDATE CASCADE;
