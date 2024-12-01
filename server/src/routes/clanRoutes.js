const express = require("express");
const { getAllClanHandler , getCurrentWarHandler} = require("../controllers/clanController");
const { getClanInfoHandler } = require("../controllers/memberController");
const { getSortedMembersHandler } = require("../controllers/builderController");
const router = express.Router();

// reitit
router.get("/clan-members", getClanInfoHandler);

router.get("/clan-info", getAllClanHandler);

router.get("/builder-members", getSortedMembersHandler);

//router.get("/war", getCurrentWarHandler);

module.exports = router;
