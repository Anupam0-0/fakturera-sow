
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const translator = async (req, res) => {
  try {
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
  } catch (error) {
    console.error("Error fetching translations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = { translator };
