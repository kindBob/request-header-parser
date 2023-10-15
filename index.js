require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env["PORT"];

app.use(express.static("public"));

app.route("/api/whoami").get((req, res) => {
    const ipAddress = req.ip;
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];

    res.json({
        ipAddress: ipAddress.replace("::ffff:", ""),
        language: language,
        software: software,
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
