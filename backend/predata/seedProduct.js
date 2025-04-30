const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 25; i++) {
    await prisma.product.create({
      data: {
        articleNo: i,
        product: `Test Product ${i}`,
        inPrice: 750 + i,
        price: 1000 + i,
        unit: 'Tons',
        inStock: 7 + i,
        description: `Sample Product ${i}`,
      },
    });
  }
}
main().catch(console.error).finally(() => prisma.$disconnect());
