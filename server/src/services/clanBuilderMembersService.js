const axios = require("axios");
const {baseUrl , apiToken} = require('../config.js');
//const BASE_URL = "https://api.clashofclans.com/v1/";


const getBuilderMembers = async (clanTag) => {
    try {
      const response = await axios.get(
        `${baseUrl}clans/${encodeURIComponent(clanTag)}`,
        {
          headers: { Authorization: `Bearer ${apiToken}` },
        }
      );
      // Otetaan jäsenlista ja lajitellaan builderBaseTrophies-arvon mukaan
      if (response.data && response.data.memberList) {
        return response.data.memberList;
        
      } else {
        throw new Error("Jäsenlistaa ei löytynyt");
      }
    } catch (error) {
      console.error("Virhe API-kutsussa:", error.message);
      throw new Error("API-pyyntö epäonnistui");
    }
  };

  module.exports = { getBuilderMembers}