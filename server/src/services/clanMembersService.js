const axios = require("axios");
const {baseUrl , apiToken} = require('../config.js');


const getClanInfo = async (clanTag) => {
  try {
    const response = await axios.get(
      `${baseUrl}clans/${encodeURIComponent(clanTag)}`,
      {
        headers: { Authorization: `Bearer ${apiToken}` },
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