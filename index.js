require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env["PORT"];

app.use(express.static("public"));

app.route("/api/whoami").get((req, res) => {
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];
    let ipAddress = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    res.json({
        ipAddress: ipAddress,
        language: language,
        software: software,
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
