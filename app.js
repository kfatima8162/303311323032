const express = require("express");
const Log = require("./logging middleware/logging");

const app = express();

app.listen(3000, async () => {
    await Log(
        "backend",
        "info",
        "server",
        "Server started on port 3000"
    );
});
