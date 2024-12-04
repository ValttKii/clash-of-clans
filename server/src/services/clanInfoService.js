const axios = require("axios");
const {baseUrl , apiToken} = require('../config.js');

//Avustava kutsu kaiken datan näkemiseen
const getAllClan = async (clanTag) => {
  try {
    const response = await axios.get(
      `${baseUrl}clans/${encodeURIComponent(clanTag)}`,
      {
        headers: { Authorization: `Bearer ${apiToken}` },
      }
    );
    return response.data; // Palautetaan pelaajan tiedot
  } catch (error) {
    console.error("Virhe API-kutsussa:", error.message);
    throw new Error("API-kutsu epäonnistui"); // Virhe eteenpäin kontrollerille
  }
};

/*
// Klaanin War log on private joten ei saa dataa
const getCurrentWar = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}clans/${encodeURIComponent(clanTag)}/currentwar`,
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Virhe API-kutsussa:", error.message); // error 403, access denied
    throw new Error("API-kutsu epäonnistui"); // Virhe eteenpäin kontrollerille
  }
}*/
module.exports = { getAllClan };


