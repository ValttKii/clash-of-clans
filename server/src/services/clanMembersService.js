const axios = require("axios");

const BASE_URL = process.env.BASE_URL;
const API_TOKEN = process.env.API_TOKEN;



const getClanInfo = async (clanTag) => {
  try {
    const response = await axios.get(
      `${BASE_URL}clans/${encodeURIComponent(clanTag)}`,
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      }
    );
    if (response.data && response.data.memberList) {
      return response.data.memberList;
    } else {
      throw new Error("Klaania ei löytynyt");
    }
  } catch (error) {
    throw new Error("API-pyyntö epäonnistui: " + error.message);
  }
};

module.exports = { getClanInfo}