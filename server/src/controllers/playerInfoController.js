const { getPlayerInfo } = require("../services/playerInfoService");


//Filtteröinti puuttuu
const getPlayerInfoHandler = async (req, res) => {
  try {
    const { playerTag } = req.params; 
    const playerInfo = await getPlayerInfo(playerTag); 
    res.json(playerInfo); 
  } catch (error) {
    console.error("Virhe pelaajan tietojen haussa:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPlayerInfoHandler };