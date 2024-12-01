const axios = require("axios");

const BASE_URL = process.env.BASE_URL;
const API_TOKEN = process.env.API_TOKEN;
const clanTag = "#2YJQYGQJ";

//Avustava kutsu kaiken datan näkemiseen
const getAllClan = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}clans/${encodeURIComponent(clanTag)}`,
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
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


