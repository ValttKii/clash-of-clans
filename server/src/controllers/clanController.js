const { getAllClan , getCurrentWar} = require("../services/clanInfoService");
const {clans} = require('../config.js');


const getClanInfoHandler = async (req, res) => {
  try {
    const clanTag = clans.default; 
    const data = await getAllClan(clanTag);

    const generalInfo = {
      name: data.name,
      description: data.description,
      clanLevel: data.clanLevel,
      clanPoints: data.clanPoints,
      clanCapitalPoints: data.clanCapitalPoints
    };
    res.json(generalInfo);
  } catch (error) {
    console.error("Virhe API-kutsussa:", error.message);
    res.status(500).json({ error: error.message });
  }
};
/*
// Klaanin War log on private joten ei saa dataa
const getCurrentWarHandler = async (req, res) => {
  try {
    const warData = await getCurrentWar();
    res.json(warData);
  } catch (error) {
    console.error("Virhe API-kutsussa:", error.message);
    res.status(500).json({ error: error.message });
  }
};*/

module.exports = {
  getClanInfoHandler
};


