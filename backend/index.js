require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const path = require("path");

const { translator } = require("./controllers/language.controller");
const { getAllProducts, updateProductById } = require("./controllers/product.controller");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // Use environment variable for flexibility
  })
);

// API routes
app.get('/', (req, res) => {
  console.log("working...")
  res.status(200).json({ message: "Working I guess" });
});
app.get("/api/:lang/terms", translator); // Fetch all translations for a given language
app.get("/api/products", getAllProducts); // Fetch all products
app.put("/api/products/:id", updateProductById); // Update a product by ID


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
