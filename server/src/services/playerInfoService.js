const { apiToken} = require('../config.js');

// Yksittäisen pelaajan haku, filtteröinti puuttuu
// Dataa saa paljon enemmän yksittäis hausta kuin klaanijäsen haulla
// Yksittäishaku tehdään vain kun klikataan pelaajasta lisätietoja
const getPlayerInfo = async (playerTag) => {
    try {
      const response = await fetch(`https://api.clashofclans.com/v1/players/${encodeURIComponent(playerTag)}`, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Virhe API-kutsussa: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Virhe pelaajan tietojen haussa:", error.message);
      throw error;
    }
  };
  
  module.exports = { getPlayerInfo };