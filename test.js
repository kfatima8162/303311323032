const Log = require("./logging middleware/logging");

(async () => {
    await Log(
        "backend",
        "info",
        "test",
        "Logger initialized"
    );
})();