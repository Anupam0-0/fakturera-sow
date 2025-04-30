require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { Translator } = require("./controllers/language.controller");
const { getAllProducts, updateProductById } = require("./controllers/product.controller");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Fetch all translations for a given language
app.get("/api/:lang/terms", Translator);
app.get("/api/products", getAllProducts);
app.put("/api/products/:id", updateProductById);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
