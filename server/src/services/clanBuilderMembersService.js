const axios = require("axios");

//const BASE_URL = "https://api.clashofclans.com/v1/";
const BASE_URL = process.env.BASE_URL;
const API_TOKEN = process.env.API_TOKEN;


const getBuilderMembers = async (clanTag) => {
    try {
      const response = await axios.get(
        `${BASE_URL}clans/${encodeURIComponent(clanTag)}`,
        {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
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