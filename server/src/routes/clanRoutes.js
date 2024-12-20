const express = require("express");
const { getClanInfoHandler , getCurrentWarHandler} = require("../controllers/clanController");
const { getClanMembersHandler } = require("../controllers/memberController");
const { getBuilderMembersHanler } = require("../controllers/builderController");
const { getPlayerInfoHandler } = require("../controllers/playerInfoController");


const router = express.Router();

// reitit
router.get("/clan-members", getClanMembersHandler);

router.get("/clan-info", getClanInfoHandler);

router.get("/builder-members", getBuilderMembersHanler);

router.get("/player/:playerTag", getPlayerInfoHandler);
//router.get("/war", getCurrentWarHandler);

module.exports = router;
