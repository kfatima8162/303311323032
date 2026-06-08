const express = require("express");
const Log = require("../logging middleware/logging");

const router = express.Router();

router.get("/users", async (req, res) => {

    await Log(
        "backend",
        "info",
        "routes",
        "GET /users endpoint accessed"
    );

    res.send("Users List");
});

module.exports = router;