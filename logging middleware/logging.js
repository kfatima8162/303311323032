const sendLog = require("./api");

async function Log(stack, level, package, message) {

    const log = {
        stack,
        level,
        package,
        message
    };
     console.log(
        `[${stack}] ${level.toLowerCase()} : ${message}`
    );
    await sendLog(log);
}

module.exports = Log;