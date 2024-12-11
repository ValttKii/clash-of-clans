const {
  getBuilderMembers,
} = require("../services/clanBuilderMembersService.js");
const {clans} = require('../config.js');

const getBuilderMembersHanler = async (req, res) => {
  try {
    const clanTag = clans.default;
    const builderMembers = await getBuilderMembers(clanTag);
    const sortedBuilder = builderMembers
      .sort((a, b) => b.builderBaseTrophies - a.builderBaseTrophies) // Suurimmasta pienimpään
      .map((member) => ({
        name: member.name,
        builderBaseTrophies: member.builderBaseTrophies,
        builderBaseLeague: member.builderBaseLeague.name
      }));
    res.json(sortedBuilder);
  } catch {
    console.error("Virhe jäsenlistan lajittelussa:", error.message);
    res.status(500).json({ error: "Jäsenlistan lajittelu epäonnistui" });
  }
};

module.exports = { getBuilderMembersHanler };
