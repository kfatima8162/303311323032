const Log = require("../logging middleware/logging");

async function getUsers(req, res) {
    try {


    } catch (error) {

        await Log(
            "backend",
            "error",
            "database",
            error.message
        );

        res.status(500).send("Internal Server Error");
    }
}