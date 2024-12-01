const { getClanInfo } = require("../services/clanMembersService.js");

const getClanInfoHandler = async (req, res) => {
    try {
      const clanTag = "#2YJQYGQJ"; 
      const members = await getClanInfo(clanTag);
  
      // Filtteröinti ja muokkaus
      const filteredMembers = members
        .map((member) => ({
          name: member.name,
          expLevel: member.expLevel,
          role: member.role,
        }))
        .sort((a, b) => b.expLevel - a.expLevel);
  
      res.json(filteredMembers);
    } catch (error) {
      console.error("Virhe API-kutsussa:", error.message);
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {getClanInfoHandler};