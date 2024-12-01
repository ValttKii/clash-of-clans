require("dotenv").config();
const express = require("express");
const cors = require("cors");
const clanRoutes = require("./routes/clanRoutes");


const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", clanRoutes);

app.listen(port, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});


