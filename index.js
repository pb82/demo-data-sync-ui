"use strict";

const bodyParser = require("body-parser")
    , express = require("express")
    , { join } = require("path")
    , { port } = require("./config")
    , { info } = require("./logger");


const Banner = "AeroGear Sync UI";

const App = express();

// Set-up payload parsers. We accept url encoded and json values
App.use(bodyParser.urlencoded({extended: false}));
App.use(bodyParser.json());

App.use(express.static(join(__dirname, "public")));

App.get("/", (req, res) => {
    return res.sendFile(join(__dirname, "index.html"));
});

App.get("*", (_, res) => {
    return res.sendStatus(404);
});

App.listen(port, () => {
    info(`${Banner} running on port ${port}`);
});
