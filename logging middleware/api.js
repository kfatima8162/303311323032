const axios = require("axios");
async function sendLog(logData) {
    try {
        await axios.post(
            "TEST_SERVER_API_URL",
            logData
        );
    } catch (err) {
        console.error("Log API Failed:", err.message);
    }
}

module.exports = sendLog;