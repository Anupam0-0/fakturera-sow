require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",

  })
);

// Fetch all translations for a given language
app.get("/:lang/terms", async (req, res) => {
  const { lang } = req.params;

  const data = await prisma.translation.findMany({
    where: { languageCode: lang },
    include: { translationKey: true },
  });

  const result = {};
  data.forEach((item) => {
    result[item.translationKey.key] = item.text;
  });

  res.json(result);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
