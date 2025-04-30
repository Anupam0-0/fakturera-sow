-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "articleNo" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "inPrice" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,
    "inStock" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_articleNo_key" ON "Product"("articleNo");
