const {
  getBuilderMembers,
} = require("../services/clanBuilderMembersService.js");

const getSortedMembersHandler = async (req, res) => {
  try {
    const clanTag = "#2YJQYGQJ";
    const builderMembers = await getBuilderMembers(clanTag);
    const sortedBuilder = builderMembers
      .sort((a, b) => b.builderBaseTrophies - a.builderBaseTrophies) // Suurimmasta pienimpään
      .map((member) => ({
        name: member.name,
        builderBaseTrophies: member.builderBaseTrophies,
      }));
    res.json(sortedBuilder);
  } catch {
    console.error("Virhe jäsenlistan lajittelussa:", error.message);
    res.status(500).json({ error: "Jäsenlistan lajittelu epäonnistui" });
  }
};

module.exports = { getSortedMembersHandler };
