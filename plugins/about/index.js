let botStartDate; // TODO: Allow a plugin to store "permanent" variables

module.exports.config = { // Plugin information
    name: "About Discotron",
    id: "about-discotron",
    description: "Plugin providing commands giving information about the bot.",
    defaultPermission: "everyone",
    version: "1.0.0",
    author: "Blatoy",
    onLoad: (apis) => {
        botStartDate = new Date();
    }
};

module.exports.commands = [
    {
        trigger: "uptime",
        help: "Display current uptime for the bot",
        action: (message) => {
            message.reply("this bot has been running for at least " + secondsToReadableTime((new Date() - botStartDate) / 1000));
        }
    },
    {
        trigger: "about",
        help: "Display information related to the bot",
        action: (message) => {
            message.reply("bot powered by Discotron! Check https://github.com/forwards-long-jump/discotron/ for more info.");
        }
    }
];

/**
 * @param {number} seconds Time in seconds you want to display
 * @returns {string} Something like "2 days 2 hours 15 minutes"
 */
function secondsToReadableTime(seconds) {
    let minutes = Math.floor((seconds / 60) % 60);
    let hours = Math.floor((seconds / 3600) % 24);
    let days = Math.floor(seconds / 86400);
    let readableTime = "";

    if (days + hours + minutes <= 0) {
        readableTime = "... well it was started less than 1 minute ago.";
    }
    else {
        readableTime += (days > 0) ? (days + " day(s) ") : "";
        readableTime += (hours > 0) ? (hours + " hour(s) ") : "";
        readableTime += (minutes > 0) ? (minutes + " minute(s)") : "";
    }

    return readableTime;
}