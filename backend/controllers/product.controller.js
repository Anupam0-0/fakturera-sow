const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const getAllProducts = async (req, res) => {
  try {
    const products = (await prisma.product.findMany()).sort((a, b) => a.id - b.id);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await prisma.product.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllProducts, updateProductById };
